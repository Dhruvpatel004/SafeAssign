import React, { useRef, useState, useEffect } from "react";
import GoogleClassroomCard from "./GoogleClassroomCard";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setClassData } from '../../store/slice/classReducer';


function Classsromms() {

  const dispatch = useDispatch();
  const classData = useSelector(state => state.class.classData);





  useEffect(() => {
    // Function to fetch user details
    const fetchClassDetails = async () => {
      try {
        // Make a GET request to the API endpoint using Axios
        const response = await axios.get(`${API_BASE_URL}/api/dashboard/getJoinedClass`, {
            withCredentials: true,

          });
        // Set user details in state
    
        dispatch(setClassData(response.data))
      

      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    // Call the function to fetch user details
    fetchClassDetails();
  }, []); // Run once on component mount

  return (
   
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">  
    
    {classData.map((classItem) => (
      <GoogleClassroomCard
        key={classItem.classroomID}
        data={classItem}
      />
    ))}
  </div>

  )
}

export default Classsromms