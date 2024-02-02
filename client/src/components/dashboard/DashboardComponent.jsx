import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";

import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleClassroomCard from "../utils/GoogleClassroomCard";
function DashboardComponent({ user, setProgress }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Set the initial state to true
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    const x = e.clientX;
    const y = e.clientY;

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
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goToDocSimilarity = () => {
    navigate("/doc-similarity");
  };

  const classData = [
    {
      title: "Mathematics - Grade 10",
      description:
        "This class focuses on fundamental concepts in mathematics for tenth-grade students.",
      teacher: "Mr. Smith",
      students: 30,
      classCode: "ABC123",
    },
    {
      title: "English Literature - Grade 11",
      description: "Exploring classic literature and modern literary works.",
      teacher: "Ms. Johnson",
      students: 25,
      classCode: "DEF456",
    },
    {
      title: "Mathematics - Grade 10",
      description:
        "This class focuses on fundamental concepts in mathematics for tenth-grade students.",
      teacher: "Mr. Smith",
      students: 30,
      classCode: "ABC123",
    },
    {
      title: "English Literature - Grade 11",
      description: "Exploring classic literature and modern literary works.",
      teacher: "Ms. Johnson",
      students: 25,
      classCode: "DEF456",
    },
    {
      title: "Mathematics - Grade 10",
      description:
        "This class focuses on fundamental concepts in mathematics for tenth-grade students.",
      teacher: "Mr. Smith",
      students: 30,
      classCode: "ABC123",
    },
    {
      title: "English Literature - Grade 11",
      description: "Exploring classic literature and modern literary works.",
      teacher: "Ms. Johnson",
      students: 25,
      classCode: "DEF456",
    },
    {
      title: "Mathematics - Grade 10",
      description:
        "This class focuses on fundamental concepts in mathematics for tenth-grade students.",
      teacher: "Mr. Smith",
      students: 30,
      classCode: "ABC123",
    },
    {
      title: "English Literature - Grade 11",
      description: "Exploring classic literature and modern literary works.",
      teacher: "Ms. Johnson",
      students: 25,
      classCode: "DEF456",
    },
    // Add more class data as needed
  ];

  return (
    <>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        user={user}
        setProgress={setProgress}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div className="p-4 sm:ml-64">
        {/* <div className="container mx-auto px-4 py-8 dark:bg-gray-800">
        {user && (
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold dark:text-white">
              User is logged in
            </p>
            <img
              src={user.image}
              alt="Profile"
              className="w-32 h-32 rounded-full mt-4"
            />

            <p className="mt-4 text-lg dark:text-white">{user.name}</p>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
            <button
              onClick={goToDocSimilarity}
              className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow dark:bg-blue-600"
            >
              Go to DocSimilarity
            </button>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow dark:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {isMenuOpen && (
            <div
              className="z-50 absolute  mt-2 w-30 bg-white rounded shadow-md dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
           
              style={{ top: menuPosition.y, right: window.innerWidth - menuPosition.x }}
            >
              <ul className="py-1" role="none">
                <li>
                  <div
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Archive
                  </div>
                </li>
                <li>
                  <div
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Unenroll
                  </div>
                </li>

              </ul>
            </div>
          )}
          {classData.map((classItem, index) => (
            <GoogleClassroomCard
              key={index}
              title={classItem.title}
              description={classItem.description}
              teacher={classItem.teacher}
              students={classItem.students}
              classCode={classItem.classCode}
              toggleMenu={toggleMenu}
              menuRef={menuRef}
              setMenuPosition={setMenuPosition}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DashboardComponent;
