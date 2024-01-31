import React from "react";
import logoImage from '../../assets/img/logo_SafeAssign.png';
import googleLogo from '../../assets/img/google.png';
import TypingAnimation from './TypingAnimation';
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center p-4 lg:w-1/2 lg:p-16">
        {/* Logo */}
        <img src={logoImage} alt="Logo" className="mb-6 h-16" />

        {/* Typing Animation */}
        <TypingAnimation />

        {/* Google Login Form Box */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          {/* Google Login Button */}
          <Link
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue flex items-center justify-center"
            to="http://localhost:5000/auth/google"
          >
            {/* Set the path for the Google logo */}
            <img src={googleLogo} alt="Google Logo" className="mr-2 h-6" />
            Login with Google
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
