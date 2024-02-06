import React from 'react'
import googleLogo from "../../assets/img/google.png";


function Announcement() {
  return (
    <div class="mt-5 mx-auto max-w-[1100px] text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 relative">
    <div className="flex items-center p-2">
      <img className="w-8 h-8 rounded-full" src={googleLogo} alt="User" />

      <div className="ml-5">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Announce something to your class
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Share important updates or information with your students.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Announcement