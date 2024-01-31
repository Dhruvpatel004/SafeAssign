import React from "react";
import SideImage from "./SideImage";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Side Image - Visible on LG (large) screens and above */}
        <SideImage />
        {/* Login Form */}
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
