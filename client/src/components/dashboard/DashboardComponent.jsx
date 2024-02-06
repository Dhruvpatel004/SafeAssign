import React, {  useState } from "react";
import Navbar from "./Navbar";

import Sidebar from "./Sidebar";
import { useNavigate,Outlet } from "react-router-dom";
import axios from "axios"



import Classsromms from "../utils/Classsromms";
function DashboardComponent({ user, setProgress }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Set the initial state to true
  const navigate = useNavigate();


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goToDocSimilarity = () => {
    navigate("/doc-similarity");
  };





  return (
    <>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        user={user}
        setProgress={setProgress}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div className="p-4  pt-0 sm:ml-64">
        {/* <div className="container mx-auto px-4 py-8 dark:bg-gray-800">
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
      </div> */}
{/* <Classsromms/> */}
<Outlet/>
      </div>
    </>
  );
}

export default DashboardComponent;
