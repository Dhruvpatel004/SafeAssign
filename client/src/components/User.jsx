import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Function to fetch user details
    const fetchUserDetails = async () => {
      try {
        // Make a GET request to the API endpoint using Axios
        const response = await axios.get(`${API_BASE_URL}/api/dashboard/getJoinedClass`, {
            withCredentials: true,
          });
        // Set user details in state
        setUserDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    // Call the function to fetch user details
    fetchUserDetails();
  }, []); // Run once on component mount

  return (
    <div>
      <h2>User Details</h2>
      {userDetails ? (
    <div>
    <h1>Data from MongoDB</h1>
    <ul>
        {userDetails.map(item => (
          <li key={item.classroomID}>
            <strong>Classroom ID:</strong> {item.classroomID}<br />
            <strong>Classroom Name:</strong> {item.classroomName}<br />
            <strong>Subject:</strong> {item.subject}<br />
            <strong>Batch:</strong> {item.batch}<br />
            <strong>Owner:</strong> {item.ownerName}<br />
            <strong>Owner:</strong> {item.ownerName} ({item.ownerEmail})<br />
            <strong>Role:</strong> {item.userRole}<br />
            {item.isArchived && <strong>This classroom is archived.</strong>}
            <img src={item.ownerAvatar} alt="Owner Avatar" />
          </li>
        ))}
      </ul>
  </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetails;
