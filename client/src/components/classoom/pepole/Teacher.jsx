import React, { useEffect, useRef, useState } from "react";

import {  useSelector } from "react-redux";


function Teacher({isSmallScreen}) {

    const teachers=useSelector(state =>state.classroom.teachers)
    const userRole= useSelector(state =>state.classroom.userRole)
  return (
    <div className="mb-5">
    <div className='mx-auto max-w-4xl mb-1 p-2 pt-4 relative text-4xl font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"'>
      <h2>Teachers</h2>
    </div>

    <div class="mx-auto max-w-4xl relative overflow-x-auto shadow-md sm:rounded-lg p-1">
      {teachers && (
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            {teachers.map((teacher, index) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    class="w-8 h-8 rounded-full"
                    src={teacher.user.avatar}
                    alt="Jese image"
                  />
                  <div class="ps-3">
                    <div class="text-base font-semibold">
                      {isSmallScreen
                        ? teacher.user.userName.slice(0, 14) + " ..."
                        : teacher.user.userName}{" "}
                    </div>
                    <div class="font-normal text-gray-500">
                      {teacher.user.email}
                    </div>
                  </div>
                </th>
                <td class="w-5 px-6 py-4">
                  <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 4 15"
                    >
                      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
  )
}

export default Teacher
