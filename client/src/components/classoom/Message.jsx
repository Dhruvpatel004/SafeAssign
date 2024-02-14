import React, { useEffect, useRef, useState } from 'react'
import googleLogo from "../../assets/img/google.png";
import Text from "./messageComponents/Text.jsx";
import Pdf from './messageComponents/Pdf.jsx';
import Img from './messageComponents/Img.jsx';
import Url from './messageComponents/Url.jsx';

function Message() {

        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const dropdownRef = useRef(null);

        const toggleDropdown = () => {
          setIsDropdownOpen(!isDropdownOpen);
        };

        useEffect(() => {
            const handleClickOutside = (event) => {
              if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
              }
            };
        
            document.addEventListener('mousedown', handleClickOutside);
        
            return () => {
              document.removeEventListener('mousedown', handleClickOutside);
            };
          }, []);

  return (
  
<div class="mt-5 flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src={googleLogo} alt="Jese image"/>
   <div class="flex flex-col gap-1 w-full max-w-[700px]">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
         <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
      </div>


      {/* //text component */}
        <Text />
      {/* //image component */}
      
    <Img />
    {/* pdf component */}
    <Pdf />
      <Url />
  


      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
   </div>
   <div className="relative inline-block" ref={dropdownRef}>
      <button id="dropdownMenuIconButton" onClick={toggleDropdown} className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>
      {isDropdownOpen && (
        <div id="dropdownDots" className="absolute top-full right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
            </li>

            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
            </li>
          </ul>
        </div>
      )}
    </div>
</div>

  )
}

export default Message