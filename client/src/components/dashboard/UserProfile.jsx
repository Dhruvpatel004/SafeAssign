import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserProfile({ user }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [ringColor, setRingColor] = useState("gray-300");

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    // Change ring color when opening/closing profile
    setRingColor(isProfileOpen ? "gray-300" : "blue-500");
  };

  return (
    <div className="flex items-center">
      {user && (
        <div className="flex items-center ms-3 relative">
          <div style={{ marginRight: "10px" }}> {/* Added right margin */}
            <button
              type="button"
              className={`flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-${ringColor} dark:focus:ring-gray-600`}
              aria-expanded={isProfileOpen ? "true" : "false"}
              onClick={toggleProfile}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={user.image}
                alt="user photo"
              />
            </button>
          </div>
          {isProfileOpen && (
 <div
 className="z-50 absolute top-full right-0 mt-2 w-48 bg-white rounded shadow-md dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
 id="dropdown-user"
 style={{borderWidth: '1px'}} // Added inline style to control the border width
>
 <div className="px-4 py-3" role="none">
   <p className="text-sm text-gray-900 dark:text-white">{user.name}</p>
   <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">{user.email}</p>
 </div>
 <ul className="py-1" role="none">
   <li>
     <Link
       href="#"
       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
       role="menuitem"
     >
       Dashboard
     </Link>
   </li>
   <li>
     <Link
       href="#"
       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
       role="menuitem"
     >
       Settings
     </Link>
   </li>
   <li>
     <Link
       href="#"
       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
       role="menuitem"
     >
       Earnings
     </Link>
   </li>
   <li>
     <Link
       href="#"
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
