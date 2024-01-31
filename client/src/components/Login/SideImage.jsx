import React, { useState,useEffect} from "react";
import sideImage from "../../assets/img/background/auth_background_design.jpg";

function SideImage() {
    
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

  const infoLines = [
    {
      heading: "Ready to revolutionize your education?",
      info: "Ready to revolutionize your education?",
    },
    {
      heading: "Looking for an LMS that's fast, user-friendly, and effective?",
      info: "Look no further than our one-line solution. Our LMS is the ultimate tool for modern learning.",
    },
    {
      heading: "Tired of complicated, bloated learning management systems?",
      info: "Our LMS is the streamlined solution you've been looking for.",
    },
  ];

  useEffect(() => {
    const infoChangeInterval = setInterval(() => {
      setCurrentInfoIndex((prevIndex) => (prevIndex + 1) % infoLines.length);
    }, 5000);

    return () => clearInterval(infoChangeInterval);
  }, [infoLines.length]);

  return (
    <>
      <div className="hidden lg:block lg:w-1/2 relative">
        {/* Set the path for the side image */}
        <img
          src={sideImage}
          alt="Side Image"
          className="w-full h-full object-cover"
        />

        {/* Info Line */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-6 rounded-md text-center">
          <h2 className="text-2xl font-bold mb-2">
            {infoLines[currentInfoIndex].heading}
          </h2>
          <p className="text-sm">{infoLines[currentInfoIndex].info}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
          <button
            className="bg-white text-black py-2 px-4 rounded-full focus:outline-none"
            onClick={() =>
              setCurrentInfoIndex(
                (prevIndex) =>
                  (prevIndex - 1 + infoLines.length) % infoLines.length
              )
            }
          >
            Prev
          </button>
          <button
            className="bg-white text-black py-2 px-4 rounded-full focus:outline-none"
            onClick={() =>
              setCurrentInfoIndex(
                (prevIndex) => (prevIndex + 1) % infoLines.length
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default SideImage;
