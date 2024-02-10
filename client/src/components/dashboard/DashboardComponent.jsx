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
        

<Outlet/>
      </div>
    </>
  );
}

export default DashboardComponent;
