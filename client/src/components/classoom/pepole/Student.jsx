import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import{promoteStudent} from "../../../store/slice/classroomReducer.js";
import { promotStudent,removeStudentFromClass} from "../../../store/slice/classroomReducer";



function Student({ isSmallScreen }) {
    const dispatch = useDispatch();

    const students = useSelector((state) => state.classroom.students);
    const userRole = useSelector((state) => state.classroom.userRole);

    const [searchQuery, setSearchQuery] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownIndex, setDropdownIndex] = useState(0);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleStudentDropdownToggle = (index) => {
        setDropdownIndex(index);
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handlePromote=(i)=>{
        dispatch(promotStudent(i._id));
        console.log(i);
        setIsDropdownOpen(false);
    };

    const handleRemove = (student) => {

        useEffect(() => {
            const fetchPeople = async () => {
                try {
                    const data = {
                        classroomID: classID,
                        studentID: student._id,
                    };

                    const response = await axios.post(
                        `${API_BASE_URL}/api/classroom/promot-student`,
                        data,
                        {
                            withCredentials: true,
                        }
                    );
                    const { joinedStudents, joinedTeachers } = response.data;

                    dispatch(removeStudentFromClass(student._id));
                    setIsDropdownOpen(false);
                }

                catch (error) {
                    console.error("Error fetching announcements:", error);
                }
            }
            fetchPeople();
        }
        , []);

    };

    

    return (
        <div>
            <div className="mx-auto max-w-4xl mb-1 p-2 pt-4 relative text-4xl font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <h2>Students</h2>
            </div>

            <div className="mx-auto max-w-4xl relative overflow-x-auto shadow-md sm:rounded-lg p-1">
                <div className="p-2 flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
                    <div>
                        <button
                            id="dropdownActionButton"
                            onClick={handleDropdownToggle}
                            className={`inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
                                dropdownOpen ? "active" : ""
                            }`}
                            type="button"
                        >
                            <span className="sr-only">Action button</span>
                            Action
                            <svg
                                className="w-2.5 h-2.5 ms-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        {dropdownOpen && (
                            <div
                                id="dropdownAction"
                                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            >
                                <ul
                                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownActionButton"
                                >
                                    <li>
                                        <button
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            type="button"
                                        >
                                            Reward
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            type="button"
                                        >
                                            Promote
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            type="button"
                                        >
                                            Activate account
                                        </button>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <button
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        type="button"
                                    >
                                        Delete User
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
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
                {students && (
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            {students
                                .filter((student) => {
                                    const userNameMatches = student.user.userName
                                        .toLowerCase()
                                        .includes(searchQuery.toLowerCase());
                                    const emailMatches = student.user.email
                                        .toLowerCase()
                                        .includes(searchQuery.toLowerCase());
                                    return userNameMatches || emailMatches;
                                })
                                .map((student, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id={`checkbox-table-search-${index}`}
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label
                                                    htmlFor={`checkbox-table-search-${index}`}
                                                    className="sr-only"
                                                >
                                                    checkbox
                                                </label>
                                            </div>
                                        </td>
                                        <th
                                            scope="row"
                                            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src={student.user.avatar}
                                                alt="Jese image"
                                            />
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">
                                                    {isSmallScreen
                                                        ? student.user.userName.slice(0, 14) + " ..."
                                                        : student.user.userName}{" "}
                                                </div>
                                                <div className="font-normal text-gray-500">
                                                    {student.user.email}
                                                </div>
                                            </div>
                                        </th>
                                        <td className="w-5 px-6 py-4">
                                            {/* Dropdown for student options */}
                                            <div className="relative">
                                                <button
                                                    onClick={() => handleStudentDropdownToggle(index)}
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                    type="button"
                                                >
                                                    <div>
                                                        <svg
                                                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 4 15"
                                                        >
                                                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                                        </svg>
                                                    </div>
                                                </button>
                                                {/* Student options dropdown */}
                                                {userRole === "teacher" && isDropdownOpen && dropdownIndex === index   && (
                                                    <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none dark:bg-gray-800 dark:border-gray-700 dark:divide-gray-700 dark:text-gray-300">
                                                        <div className="py-1">
                                                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 w-full text-left" onClick={()=>handlePromote(student)} >
                                                                Promote as Teacher
                                                            </button>
                                                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 w-full text-left" onClick={()=>handleRemove(student)} >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Student;
