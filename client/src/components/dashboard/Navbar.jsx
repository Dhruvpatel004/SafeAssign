import React from "react";
import UserProfile from "./UserProfile";

import ToggleSidebar from "./ToggleSidebar";
import TitleAndLogo from "./TitleAndLogo";


function Navbar({ toggleSidebar, isSidebarOpen,user }) {
  return (
    <>
      {/* <Sidebar/> */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3 relative">
          <div className="flex items-center justify-between">
            <ToggleSidebar
              toggleSidebar={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
            <TitleAndLogo />
      
            <UserProfile user={user}/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
