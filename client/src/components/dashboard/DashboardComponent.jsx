import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function DashboardComponent({user}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Set the initial state to true

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} user={user}/>
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div class="p-4 sm:ml-64">
          Hello This is Dashbord , Here Main Div Start
      </div>
    </>
  );
}

export default DashboardComponent;
