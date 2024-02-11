import React, { useRef, useState, useEffect } from "react";
import GoogleClassroomCard from "./GoogleClassroomCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";



function Classsromms() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef(null);

    const [actionClass, setActionClass] = useState(null)

  const toggleMenu = (e,index) => {
    const x = e.clientX;
    const y = e.clientY;
    setActionClass(index);

    // Update the state with the calculated coordinates
    setMenuPosition({ x, y });
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
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

 
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    // Function to fetch user details
    const fetchClassDetails = async () => {
      try {
        // Make a GET request to the API endpoint using Axios
        const response = await axios.get(`${API_BASE_URL}/api/dashboard/getJoinedClass`, {
            withCredentials: true,
          });
        // Set user details in state
        setClassData(response.data);
  console.log(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    // Call the function to fetch user details
    fetchClassDetails();
  }, []); // Run once on component mount

  return (
   
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
    {isMenuOpen && (
      <div
        className="z-50 absolute  mt-2 w-30 bg-white rounded shadow-md dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
     
        style={{ top: menuPosition.y, right: window.innerWidth - menuPosition.x }}
      >
        <ul className="py-1" role="none">
          <li>
            <div
              to="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer"
              role="menuitem"
              onClick={console.log(`Archived${actionClass}`)}
            >
              Archive
            </div>
          </li>
          <li>
            <div
              to="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer"
              role="menuitem"
              onClick={console.log(`Unenroll ${actionClass}`)}
            >
              Unenroll
            </div>
          </li>

        </ul>
      </div>
    )}
  
  
    {classData.map((classItem, index) => (
      <GoogleClassroomCard
        key={classItem.classroomID}
        index={index}
        data={classItem}
        toggleMenu={toggleMenu}
        menuRef={menuRef}
        setMenuPosition={setMenuPosition}
        setActionClass={setActionClass}
      />
    ))}
  </div>

  )
}

export default Classsromms