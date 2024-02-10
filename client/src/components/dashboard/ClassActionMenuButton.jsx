import React, { useEffect, useRef, useState } from "react";


function ClassActionMenuButton() {
  const menuRef = useRef(null);
  const [showJoinClass, setShowJoinClass] = useState(false);
  const [showCreateClass, setShowCreateClass] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleJoinClassCancel = () => {
    setShowJoinClass(false); // Close the modal when cancel button is clicked
  };
  const handleCreateClassCancel = () => {
    setShowCreateClass(false); // Close the modal when cancel button is clicked
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
 
    <>

      <div className="flex items-center ms-3 relative" ref={menuRef}>
        <div style={{ marginRight: "10px" }}>
          <button
            type="button"
            className={`circle-btn flex items-center justify-center w-8 h-8  rounded-full focus:ring-4 focus:ring-${
              isMenuOpen ? "blue-500" : "gray-300"
            } dark:focus:ring-gray-600`}
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
   <svg class="w-[43px] h-[43px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
  </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div
            className="z-50 absolute top-full right-0 mt-2  bg-white rounded shadow-md dark:bg-gray-700 border border-gray-300 dark:border-gray-600 "
            id="dropdown-user"
            style={{width:"110px"}}
          >
            <ul className="py-1" role="none">
              <li>
                <button
                data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                  style={{width:"110px"}}
                  onClick={() => setShowJoinClass(true)}
                >
                  Join Class
                </button>
              </li>
              <li>
                <button
                    style={{width:"110px"}}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                  onClick={() => setShowCreateClass(true)}
                >
                  Create Class
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

{showJoinClass && (
  <div id="progress-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
    <div class="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Join New Class
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleJoinClassCancel}>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <form class="p-4 md:p-5" >
                <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2">
                        <label for="classCode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class Code</label>
                        <input type="text" name="classCode" id="classCode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Class Code" required=""/>
                    </div>
                </div>
                <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Join New Class
                </button>
            </form>
        </div>
    </div>
  </div>
)}

{showCreateClass && (
  <div id="progress-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
    <div class="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Class
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleCreateClassCancel}>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <form class="p-4 md:p-5" >
                <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2">
                        <label for="className" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class Name</label>
                        <input type="text" name="className" id="clasName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Class Code" required=""/>
                    </div>
                </div>
                <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2">
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                        <input type="text" name="subject" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Class Code" required=""/>
                    </div>
                </div>
                <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2">
                        <label for="batch" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Batch</label>
                        <input type="text" name="batch" id="batch" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Class Code" required=""/>
                    </div>
                </div>
                <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Create New Class
                </button>
            </form>
        </div>
    </div>
  </div>
)}


      
    </>
  );
}

export default ClassActionMenuButton;
