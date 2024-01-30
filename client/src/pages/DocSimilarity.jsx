import React, { useState, useEffect } from "react";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);
  const [threshold, setThreshold] = useState(0);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      setProgress(20);
      const response = await axios.get(
        "http://localhost:5000/api/check-login",
        {
          withCredentials: true,
        }
      );
      setTimeout(() => {
        setProgress(60);
      }, 300);
      const { loggedIn, user } = response.data;
      setProgress(100);
      if (loggedIn) {
        setUser(user);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Login status check failed:", error);
      toast.error("Failed to check login status");
    }
  };

  useEffect(() => {
    if (files.length > 1) {
      calculateSimilarity();
    }
  }, [threshold, files]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleThresholdChange = (e) => {
    setThreshold(parseFloat(e.target.value));
  };

  const calculateSimilarity = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("threshold", threshold);
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/document-similarity",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResults(response.data.result_data);
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred while processing the files.");
    } finally {
      setLoading(false);
    }
  };

  const cancelUpload = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };
  const goBackToDashboard = () => {
    navigate('/');
  };
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
      <LoadingBar
        color="#f11946"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        style={{ zIndex: 9999 }}
      />
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-4">Document Similarity Detection</h1>
      <button
        onClick={goBackToDashboard}
        className='mt-8 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow'
      >
        Go back to Dashboard
      </button>
      <div
        className="drop-area border border-dashed border-gray-400 p-4 text-center cursor-pointer bg-gray-100 my-4 rounded-lg"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <input
          type="file"
          id="file-input"
          className="file-input hidden"
          multiple
          onChange={handleFileChange}
        />
        <label htmlFor="file-input">
          <p>Drag & Drop files or click to select</p>
        </label>
      </div>

      <div className="controls mb-4">
        <label className="threshold-label flex items-center">
          Similarity Threshold:
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={threshold}
            onChange={handleThresholdChange}
            className="ml-2"
          />
          {threshold.toFixed(2)}
        </label>
      </div>

      {files.length > 0 && (
        <div className="mb-4 w-full max-w-lg">
          <h2 className="mb-2">Uploaded Files:</h2>
          <ul className="file-list border border-gray-300 rounded-lg p-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="file-item flex justify-between items-center py-1"
              >
                <span>
                  {file.name} - Size: {formatBytes(file.size)}
                </span>
                <button
                  className="text-red-600 bg-transparent border border-solid border-red-500 rounded px-2 py-1 transition duration-300 ease-in-out hover:bg-red-500 hover:text-white"
                  onClick={() => cancelUpload(index)}
                >
                  Cancel
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {results.length > 0 && (
        <div className="mb-4 w-full max-w-lg">
          <h2 className="mb-2">Comparison Results:</h2>
          <table className="full-table border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">File Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Copied From
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Average Similarity
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, resultIndex) => (
                <tr key={resultIndex} className="border border-gray-300">
                  <td className="border border-gray-300 px-4 py-2">
                    {result.file_name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <ul>
                      {result.results.map((docResult, docIndex) => (
                        <li key={docIndex}>
                          {docResult.file_name}:{" "}
                          {docResult.similarity.toFixed(4)}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {result.average_similarity.toFixed(4)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {loading && (
        <div className="overlay fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      )}
    </div>
  );
};

export default App;
