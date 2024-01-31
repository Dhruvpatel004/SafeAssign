// src/components/LoginPage.js
import React, {useEffect } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import Login from "../components/Login/Login";


const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/check-login`, {
        withCredentials: true,
      });
      const { loggedIn } = response.data;

      console.log(loggedIn);

      if (loggedIn) {
        navigate("/");
      }
    } catch (error) {
      console.error("Login status check failed:", error);
    }
  };

  return (
  <Login/>
  );
};

export default LoginPage;
