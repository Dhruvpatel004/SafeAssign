// useCheckLoginStatus.js
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const useCheckLoginStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/check-login`, {
          withCredentials: true,
        });
        const { loggedIn } = response.data;
        if (!loggedIn && location.pathname !== '/login') { // Add condition to prevent redirect loop
          navigate('/login');
        }
      } catch (error) {
        console.error('Login status check failed:', error);
        // Handle error here if needed
      }
    };

    checkLoginStatus(); // Call the function immediately when component mounts

    // eslint-disable-next-line react-hooks/exhaustive-deps
    //will run this when user change the url
  }, [location.pathname]); // Watch for changes in pathname
};

export default useCheckLoginStatus;
