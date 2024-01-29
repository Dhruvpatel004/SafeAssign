import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/check-login', {
        withCredentials: true
      });
      const { loggedIn, user } = response.data;

      if (loggedIn) {
        setUser(user);
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Login status check failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:5000/logout', {
        withCredentials: true
      });
      if (response.data.status === 'success') {
        navigate('/login');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {user ? (
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">User is logged in</p>
          <img src={user.image} alt="Profile" className="w-32 h-32 rounded-full mt-4" />
          <p className="mt-4 text-lg">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
          <button
            onClick={handleLogout}
            className="mt-8 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>User is not logged in</p>
      )}
    </div>
  );
};

export default Dashboard;
