import React, { useState } from 'react';
import UserProfile from './UserProfile';

function Sidebar({isSidebarOpen}) {


  return (
    <>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 0 0-8.866 8.998c.002 4.668 3.841 8.432 8.516 8.432h.984A9.506 9.506 0 0 0 17 17.575V12a1 1 0 0 0-.025-1zM10 19.575c-4.182 0-7.566-3.379-7.566-7.575 0-.616.497-1.116 1.101-1.116h5.465a1 1 0 0 0 .9-1.448 1 1 0 0 0-1.448-.9l-4.464 4.464a1 1 0 0 0-.3.714c0 .264.104.514.3.7l4.47 4.464a1 1 0 0 0 .726.312 1.012 1.012 0 0 0 .714-.3 1.013 1.013 0 0 0 .3-.714V19.57l-.001.005H10z"></path>
                </svg>
                <span className="ml-2">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M11 0a1 1 0 0 1 1 1v7.879l3.14-3.14a1 1 0 1 1 1.413 1.413l-4.95 4.95a1 1 0 0 1-1.32.084l-4.95-3.95a1 1 0 1 1 1.32-1.496L11 9.878V1a1 1 0 0 1 1-1z"></path>
                  <path d="M11 11a1 1 0 0 1 1 1v7.879l3.14-3.14a1 1 0 1 1 1.413 1.413l-4.95 4.95a1 1 0 0 1-1.32.084l-4.95-3.95a1 1 0 1 1 1.32-1.496L11 20.878V12a1 1 0 0 1 1-1z"></path>
                </svg>
                <span className="ml-2">About</span>
              </a>
            </li>
            {/* Add more sidebar items as needed */}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
