import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import axios from "axios"

function UserProfile({ user }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileRef]);

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/logout`, {
        withCredentials: true,
      });

      if (response.data.status === "success") {
        // sLogout();

        navigate("/login");
      }
    } catch (error) {
      // nLogout();

      // toast.error("Failed to logout", style);
    }
  };

  // const sLogout = () => toast.success("Logout Successful", style);
  // const nLogout = () => toast.error("Failed to Logout", style);

  return (
    <div className="flex items-center">
      <DarkModeToggle />
      {user && (
        <div className="flex items-center ms-3 relative" ref={profileRef}>
          <div style={{ marginRight: "10px" }}>
            <button
              type="button"
              className={`flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full focus:ring-4 focus:ring-${
                isProfileOpen ? "blue-500" : "gray-300"
              } dark:focus:ring-gray-600`}
              aria-expanded={isProfileOpen ? "true" : "false"}
              onClick={toggleProfile}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-full h-full rounded-full"
                src={user.image}
                alt="user photo"
              />
            </button>
          </div>
          {isProfileOpen && (
            <div
              className="z-50 absolute top-full right-0 mt-2 w-48 bg-white rounded shadow-md dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              id="dropdown-user"
            >
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white">
                  {user.name}
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                  {user.email}
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doc-similarity"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    DocSimilarity
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserProfile;
