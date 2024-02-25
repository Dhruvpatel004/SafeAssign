import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addClassAnnouncement } from "../../store/slice/classroomReducer"; 


function AnnouncementBox() {
    const [files, setFiles] = useState([]);
    const [links, setLinks] = useState([]);
    const [text, setText] = useState("");
    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [sendButton, setSendButton] = useState('send');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const textareaRef = useRef(null);
    const dispatch = useDispatch(); // dispatch function

    const classroomID = useSelector(state => state.classroom.classID);
    const announcements = useSelector(state => state.classroom.announcements);

    useEffect(() => {
        adjustHeight();
    }, [text]);

    const adjustHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    const handleAddFile = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
        setIsDraggingOver(false);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDraggingOver(true);
    };

    const handleDragLeave = () => {
        setIsDraggingOver(false);
    };

    const handleAddLink = () => {
        const newLink = prompt("Enter the URL of the link:");
        if (newLink) {
            setLinks((prevLinks) => [...prevLinks, newLink]);
        }
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleRemoveFile = (index) => {
        setFiles(prevFiles => {
            const newFiles = [...prevFiles];
            newFiles.splice(index, 1);
            return newFiles;
        });
    };

    const handleRemoveLink = (index) => {
        setLinks((prevLinks) => {
            const newLinks = [...prevLinks];
            newLinks.splice(index, 1);
            return newLinks;
        });
    };

    const handleSubmit = async () => {
        try {
            setSendButton('sending...');
            setIsButtonDisabled(true);
            console.log("Sending announcement...");
            console.log(classroomID);          
            const formData = new FormData();
            formData.append("text", text);
            formData.append("classroomID", classroomID);
            // formData.append("urls", links);
            links.forEach((link) => {
                formData.append("urls", link);
            });
            files.forEach((file) => {
                formData.append("files", file);
            });

            const result = await axios.post(`${API_BASE_URL}/api/classroom/add-announcement`, formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            dispatch(addClassAnnouncement(result.data)); // dispatch the action
            console.log(announcements);
            setSendButton('send');
            setIsButtonDisabled(false);
            setText("");
            setFiles([]);
            setLinks([]);
            textareaRef.current.style.height = "auto";
            console.log(result.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="announcement-box max-w-xl mx-auto p-6 border border-gray-200 rounded-lg shadow-md" onDrop={handleDrop}>
            <div className="text-section mb-4">
                <h2 className="text-lg font-bold mb-2 dark:text-white">Text</h2>
                <textarea
                    rows={4}
                    cols={60}
                    ref={textareaRef}
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Enter your text here..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
            </div>
            <div className="flex flex-wrap space-y-4 md:space-x-4 md:space-y-0">
                {/* Media Files Section */}
                {files.length > 0 && (
                    <div className="w-full md:w-1/2">
                        <div className="media-files-section">
                            <h2 className="text-lg font-bold mb-2 dark:text-white">Media Files</h2>
                            <div className="flex flex-col">
                                <input
                                    type="file"
                               
                                    onChange={handleAddFile}
                                    className="hidden"
                                    id="fileInput"
                                    multiple
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {files.map((file, index) => (
                                        <div
                                            key={index}
                                            className="media-file-item flex items-center border border-gray-200 p-2 rounded-md"
                                        >
                                            {file.type.startsWith("image") && (
                                                <img
                                                    src={file.data}
                                                    alt={`Image ${index}`}
                                                    className="w-16 h-16 rounded-md mr-2"
                                                />
                                            )}
                                            {!file.type.startsWith("image") && (
                                                <span className="pdf-file text-blue-500 hover:underline">
                                                    {file.name}
                                                </span>
                                            )}
                                            <button
                                                onClick={() => handleRemoveFile(index)}
                                                className="remove-btn ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Links Section */}
                {links.length > 0 && (
                    <div className="w-full md:w-1/2">
                        <div className="links-section mt-4">
                            <h3 className="text-lg font-bold mb-2 dark:text-white">Links</h3>
                            {links.map((link, index) => (
                                <div key={index} className="link-item mt-2">
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        {link}
                                    </a>
                                    <button
                                        onClick={() => handleRemoveLink(index)}
                                        className="remove-btn ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex items-center justify-between mt-6">
                <button onClick={handleSubmit} className="submit-btn px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" disabled={isButtonDisabled}>
                    {sendButton}
                </button>
                <div className="flex">
                    <input type="file" accept="image/*,.pdf" onChange={handleAddFile} className="hidden" id="fileInput" multiple />
                    <label htmlFor="fileInput" className="attach-file-label px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 cursor-pointer mr-4" disabled={isButtonDisabled}>
                        Attach File
                    </label>
                    <button onClick={handleAddLink} className="attach-url-btn px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" disabled={isButtonDisabled}>
                        Attach URL
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AnnouncementBox;
