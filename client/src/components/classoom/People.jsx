import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setStudents, setTeachers } from "../../store/slice/classroomReducer";
import Student from "./pepole/Student.jsx";
import Teacher from "./pepole/Teacher.jsx";

function People() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.classroom.students);
  const teachers = useSelector((state) => state.classroom.teachers);
  const classID = useSelector((state) => state.classroom.classID);


  const [isSmallScreen, setIsSmallScreen] = useState(false);



  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const data = {
          classroomID: classID,
        };

        const response = await axios.post(
          `${API_BASE_URL}/api/classroom/get-joined-user`,
          data,
          {
            withCredentials: true,
          }
        );
        const { joinedStudents, joinedTeachers } = response.data;
        dispatch(setStudents(joinedStudents));
        dispatch(setTeachers(joinedTeachers));
        // console.log(joinedStudents);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchPeople();
  }, []);

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



  return (
    <>

    <Teacher isSmallScreen={isSmallScreen}/>
    <Student isSmallScreen={isSmallScreen}/>
    </>
  );
}

export default People;
