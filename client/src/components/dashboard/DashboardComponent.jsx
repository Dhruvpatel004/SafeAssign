import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import {toast } from "react-toastify";
function DashboardComponent({user,setProgress}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Set the initial state to true
  const navigate = useNavigate();
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const style = {
    position: "bottom-center",
    theme: "dark",
    autoClose: 1000, // Time in milliseconds, set to 1000 for 1 second
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    try {
      setProgress(20);
      setProgress(40);
      const response = await axios.get(`${API_BASE_URL}/logout`, {
        withCredentials: true,
      });

      await wait(300);
      if (response.data.status === "success") {
        sLogout();
        setProgress(60);
        setProgress(100);
        await wait(700);
        navigate("/login");
      }
    } catch (error) {
  console.log(error);
      // toast.error("Failed to logout", style);
      nLogout();
    }
  };

  const sLogout = () => toast.success("Logout Successful", style);
  const nLogout = () => toast.error("Failed to Logout", style);

  const goToDocSimilarity = () => {
    navigate("/doc-similarity");
  };



  return (
    <>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} user={user}/>
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div className="p-4 sm:ml-64">

        
      <div className="container mx-auto px-4 py-8 dark:bg-gray-800">
        {user && (
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold dark:text-white">
              User is logged in
            </p>
            <img
              src={user.image}
              alt="Profile"
              className="w-32 h-32 rounded-full mt-4"
            />

            <p className="mt-4 text-lg dark:text-white">{user.name}</p>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
            <button
              onClick={goToDocSimilarity}
              className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow dark:bg-blue-600"
            >
              Go to DocSimilarity
            </button>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow dark:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      </div>
    </>
  );
}

export default DashboardComponent;
