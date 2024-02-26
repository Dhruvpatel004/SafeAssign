import React, { useEffect, useState } from "react";
import googleImg from "../../assets/img/google.png";

function People() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 550);
    };

    // Call handleResize when component mounts
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const students = [
    "21cs041@charusat.edu.in",
    "21cs044@charusat.edu.in",
    "21cs045@charusat.edu.in",
    "21cs047@charusat.edu.in",
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="mb-5">
        <div className='mx-auto max-w-4xl mb-1 p-2 pt-4 relative text-4xl font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"'>
          <h2>Teachers</h2>
        </div>

        <div class="mx-auto max-w-4xl relative overflow-x-auto shadow-md sm:rounded-lg p-1">

          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

            <tbody>
              {students.map((student, index) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      class="w-8 h-8 rounded-full"
                      src={googleImg}
                      alt="Jese image"
                    />
                    <div class="ps-3">
                      <div class="text-base font-semibold">
                        {isSmallScreen
                          ? student.slice(0, 14) + " ..."
                          : "21cs041 Patel Dhruv Navinchandra"}{" "}
                      </div>
                      <div class="font-normal text-gray-500">{student}</div>
                    </div>
                  </th>
                  <td class="w-5 px-6 py-4">
                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <div>
                        <p class="text-lg font-medium text-gray-900 dark:text-white">
                          ...
                        </p>
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className='mx-auto max-w-4xl mb-1  p-2 pt-4 relative text-4xl font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"'>
          <h2>Students</h2>
        </div>

        <div class="mx-auto max-w-4xl relative overflow-x-auto shadow-md sm:rounded-lg p-1">
          <div class="p-2 flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
            <div>
              <button
                id="dropdownActionButton"
                onClick={handleDropdownToggle}
                class={`inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${dropdownOpen ? 'active' : ''}`}
                type="button"
              >
                <span class="sr-only">Action button</span>
                Action
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              {dropdownOpen && (
                <div
                  id="dropdownAction"
                  class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownActionButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Reward
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Promote
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Activate account
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete User
                    </a>
                  </div>
                </div>
              )}
            </div>
            <label for="table-search" class="sr-only">
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for Students"
              />
            </div>
          </div>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              {students.filter(student => student.includes(searchQuery)).map((student, index) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id={`checkbox-table-search-${index}`}
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for={`checkbox-table-search-${index}`} class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      class="w-8 h-8 rounded-full"
                      src={googleImg}
                      alt="Jese image"
                    />
                    <div class="ps-3">
                      <div class="text-base font-semibold">
                        {isSmallScreen
                          ? student.slice(0, 14) + " ..."
                          : "21cs041 Patel Dhruv Navinchandra"}{" "}
                      </div>
                      <div class="font-normal text-gray-500">{student}</div>
                    </div>
                  </th>
                  <td class="w-5 px-6 py-4">
                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <div>
                        <p class="text-lg font-medium text-gray-900 dark:text-white">
                          ...
                        </p>
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default People;
