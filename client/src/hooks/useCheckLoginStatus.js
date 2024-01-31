// hooks/useCheckLoginStatus.js
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const useCheckLoginStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/check-login`, {
          withCredentials: true,
        });
        const { loggedIn } = response.data;
        if (loggedIn && location.pathname == '/login') {
          navigate('/');
        }
        else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Login status check failed:', error);
        // Handle error here if needed
      }
    };

    checkLoginStatus();
  }, [location.pathname, navigate]);

  // No need to return anything from this custom hook
};

export default useCheckLoginStatus;
