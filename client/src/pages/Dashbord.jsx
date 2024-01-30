import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const style = {
    position: 'bottom-center',
    theme: 'dark',
    autoClose: 1000, // Time in milliseconds, set to 1000 for 1 second
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      setProgress(20);
      const response = await axios.get('http://localhost:5000/api/check-login', {
        withCredentials: true,
      });
      setTimeout(() => {
        setProgress(60);
      }, 300);
      const { loggedIn, user } = response.data;
      setProgress(100);
      if (loggedIn) {
        setUser(user);
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Login status check failed:', error);
      toast.error('Failed to check login status', style);
    }
  };

  const handleLogout = async () => {
    try {
      setProgress(20);
      setProgress(40);
      const response = await axios.get('http://localhost:5000/logout', {
        withCredentials: true,
      });
      setTimeout(() => {
        setProgress(70);
      }, 500);
      if (response.data.status === 'success') {
        sLogout();
        setProgress(80);
        setTimeout(() => {
          setProgress(100);
          navigate('/login');
        }, 1000);
      }
    } catch (error) {
      nLogout();
      setProgress(100);
      toast.error('Failed to logout', style);
    }
  };

  const sLogout = () => toast.success('Logout Successful', style);
  const nLogout = () => toast.error('Failed to Logout', style);

  return (
    <>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        style={{ zIndex: 9999 }}
      />
      <ToastContainer />
      <div className='container mx-auto px-4 py-8'>
        {user && (
          <div className='flex flex-col items-center'>
            <p className='text-lg font-semibold'>User is logged in</p>
            <img src={user.image} alt='Profile' className='w-32 h-32 rounded-full mt-4' />
            
            <p className='mt-4 text-lg'>{user.name}</p>
            <p className='text-gray-600'>{user.email}</p>
            <button
              onClick={handleLogout}
              className='mt-8 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow'
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
