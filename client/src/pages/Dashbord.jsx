import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardComponent from "../components/dashboard/DashboardComponent";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const style = {
    position: "bottom-center",
    theme: "dark",
    autoClose: 1000, // Time in milliseconds, set to 1000 for 1 second
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      setProgress(20);
      const response = await axios.get(`${API_BASE_URL}/api/check-login`, {
        withCredentials: true,
      });
      wait(300);
      setProgress(60);
      const { loggedIn, user } = response.data;
      setProgress(100);
      if (loggedIn) {
        setUser(user);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Login status check failed:", error);
      toast.error("Failed to check login status", style);
    }
  };




  return (
    <>
      <LoadingBar
        color="#f11946"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        style={{ zIndex: 9999 }}
      />
      <ToastContainer />
      <DashboardComponent user={user}setProgress={setProgress} />

    </>
  );
};

export default Dashboard;
