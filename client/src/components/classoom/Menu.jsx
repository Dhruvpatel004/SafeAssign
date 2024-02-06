import React from 'react';
import { Link } from "react-router-dom";

const customStyles = {
  position: 'sticky',
  top: '65px', // Default value for small screens
};

const largeScreenStyles = {
  top: '57px', // Value for large screens
};

function Menubar() {
  const isLargeScreen = window.innerWidth > 768; // Define the breakpoint for large screens

  return (
    <div className="sticky pt-1 z-50 bg-white dark:bg-gray-800 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700" style={{ ...customStyles, ...(isLargeScreen && largeScreenStyles) }}>
      <ul className="flex flex-wrap justify-evenly">
        <li className="me-2">
          <Link
            href="#"
            className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 active rounded-t-lg dark:text-blue-500 dark:border-blue-500"
          >
            Stream
          </Link>
        </li>
        <li className="me-2">
          <Link
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            aria-current="page"
          >
            Classwork
          </Link>
        </li>
        <li className="me-2">
          <Link
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            People
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menubar;
