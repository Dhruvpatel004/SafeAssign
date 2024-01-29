// src/components/LoginPage.js
import React, { useState, useEffect } from 'react';
import wavingHandGif from '../assets/img/Hi.gif';
import logoImage from '../assets/img/logo_SafeAssign.png';
import sideImage from '../assets/img/background/auth_background_design.jpg';
import googleLogo from '../assets/img/google.png';

const LoginPage = () => {
  const [messages, setMessages] = useState([
    'Welcome to our login page!',
    'Sign in to access your account.',
    'Secure and easy authentication.',
    'Login with Google for a seamless experience.',
    'Enjoy your stay!',
  ]);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const infoLines = [
    { heading: 'Ready to revolutionize your education?', info: 'Ready to revolutionize your education?' },
    { heading: 'Looking for an LMS that\'s fast, user-friendly, and effective?', info: 'Look no further than our one-line solution. Our LMS is the ultimate tool for modern learning.' },
    { heading: 'Tired of complicated, bloated learning management systems?', info: 'Our LMS is the streamlined solution you\'ve been looking for.' },
  ];

  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

  useEffect(() => {
    const message = messages[currentMessageIndex];
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index <= message.length) {
        setCurrentMessage(message.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);

        setTimeout(() => {
          setCurrentMessage('');
          setShowCursor(true);
          setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentMessageIndex, messages]);

  useEffect(() => {
    const infoChangeInterval = setInterval(() => {
      setCurrentInfoIndex((prevIndex) => (prevIndex + 1) % infoLines.length);
    }, 5000);

    return () => clearInterval(infoChangeInterval);
  }, [infoLines.length]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Side Image - Visible on LG (large) screens and above */}
      <div className="hidden lg:block lg:w-1/2 relative">
        {/* Set the path for the side image */}
        <img src={sideImage} alt="Side Image" className="w-full h-full object-cover" />

        {/* Info Line */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-6 rounded-md text-center">
          <h2 className="text-2xl font-bold mb-2">{infoLines[currentInfoIndex].heading}</h2>
          <p className="text-sm">{infoLines[currentInfoIndex].info}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
          <button
            className="bg-white text-black py-2 px-4 rounded-full focus:outline-none"
            onClick={() => setCurrentInfoIndex((prevIndex) => (prevIndex - 1 + infoLines.length) % infoLines.length)}
          >
            Prev
          </button>
          <button
            className="bg-white text-black py-2 px-4 rounded-full focus:outline-none"
            onClick={() => setCurrentInfoIndex((prevIndex) => (prevIndex + 1) % infoLines.length)}
          >
            Next
          </button>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 lg:w-1/2 lg:p-16">
        {/* Logo */}
        <img src={logoImage} alt="Logo" className="mb-6 h-16" />

        {/* Typing Animation */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold flex items-center">
            <img src={wavingHandGif} alt="Waving Hand" className="h-12 mr-4" />
            <p className="inline-block">Welcome back!</p>
          </div>
          <div className="text-sm mt-2">
            {currentMessage}
            {showCursor && <span className="animate-blink">|</span>}
          </div>
        </div>

        {/* Google Login Form Box */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          {/* Google Login Button */}
          <button
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue flex items-center justify-center"
            onClick={() => {
              // Handle Google login
              console.log('Perform Google login');
            }}
          >
            {/* Set the path for the Google logo */}
            <img src={googleLogo} alt="Google Logo" className="mr-2 h-6" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;