import React, { useEffect, useState } from "react";
import wavingHandGif from "../../assets/img/Hi.gif";


function TypingAnimation() {
  const messages = [
    "Welcome to our login page!",
    "Sign in to access your account.",
    "Secure and easy authentication.",
    "Login with Google for a seamless experience.",
    "Enjoy your stay!",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const [showCursor, setShowCursor] = useState(true);

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
          setCurrentMessage("");
          setShowCursor(true);
          setCurrentMessageIndex(
            (prevIndex) => (prevIndex + 1) % messages.length
          );
        }, 3000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentMessageIndex]);
  return (
    <>
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
    </>
  );
}

export default TypingAnimation;
