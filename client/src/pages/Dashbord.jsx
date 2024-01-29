import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const [progress, setProgress] = useState(0)
  
  const navigate = useNavigate();

  const style = {
    position: "bottom-center",
    theme: "dark",
  };
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
      setProgress(20);
      setProgress(40);
      const response = await axios.get('http://localhost:5000/logout', {
        withCredentials: true
      });
      setProgress(70);
      if (response.data.status === 'success') {
        sLogout()
      setProgress(80);

      setTimeout(() => {
        
          setProgress(100);
          navigate('/login');
        }, 500);

      }
    } catch (error) {
      nLogout()
    }
  };


  const sLogout = () => toast.success("Logout Successful", style);
  const nLogout = () => toast.success("Failled to Logout", style);


  return (
    <>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        style={{ zIndex: 9999 }}
      />
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
    </>
  );
};

export default Dashboard;
