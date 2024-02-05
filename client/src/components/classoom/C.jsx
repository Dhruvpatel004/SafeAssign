import React from "react";
import { Link } from "react-router-dom";
import pic from './../../assets/Honors.jpg'
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


      <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded md:rounded-none md:rounded-s-lg" src={pic} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
    </div>
</a>

    </>
  );
}

export default classroom;
