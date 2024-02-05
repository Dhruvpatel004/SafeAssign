import React from "react";
import { Link } from "react-router-dom";
import pic from "./../../assets/Honors.jpg";
function classroom() {
  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap  justify-evenly">
          <li className="me-2">
            <Link
              href="#"
              className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 active rounded-t-lg  dark:text-blue-500 dark:border-blue-500"
            >
              Stream
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="#"
              className=" inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
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

      <div class="mt-5 w-full p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        Work fast from anywhere
        </p>

      </div>
    </>
  );
}

export default classroom;
