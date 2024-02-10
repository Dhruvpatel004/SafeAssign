import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Function to fetch user details
    const fetchUserDetails = async () => {
      try {
        // Make a GET request to the API endpoint using Axios
        const response = await axios.get(`${API_BASE_URL}/api/check-login`, {
            withCredentials: true,
          });
        // Set user details in state
        setUserDetails(response.data.user);
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
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          {/* Add additional user details as needed */}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetails;
