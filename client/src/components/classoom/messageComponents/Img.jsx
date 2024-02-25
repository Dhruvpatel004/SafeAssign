import React, { useState } from 'react';
// import pic1 from './../../../assets/img/background/auth_background.jpg';
import pic2 from './../../../assets/Honors.jpg';
import pic3 from './../../../assets/img_bookclub.jpg';
import pic4 from './../../../assets/img_breakfast.jpg';



function Img({img}) {
  const [showAllImages, setShowAllImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // const imgLinks = mediaImgs.map((img) => img.url);

  const handleImgClick = (url) => {
    setSelectedImage(url);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };


  const handleDownloadImgClick = (e, url) => {
    e.stopPropagation();
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
    anchor.download = url.substring(url.lastIndexOf('/') + 1); // Set the filename
    anchor.click();
};

  const handleShowAllImages = () => {
    console.log(img);
    setShowAllImages(true);
  };

  const handleHideAllImages = () => {
    setShowAllImages(false);
  };

  

  const handleSaveAllImages = () => {
    // Logic to save all images
    // For example, you can use the following code to save each image
    img.forEach(i => {
      const anchor = document.createElement('a');
      anchor.href = i.url;
      anchor.download = i.fileName;
      anchor.click();
    });

  };

  

  return (
    <div className="flex flex-col w-full max-w-[700px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              {selectedImage && (
        <div className="absolute  w-auto h-auto flex justify-center items-center bg-black bg-opacity-75 z-50" onClick={handleCloseImage}>
          <img src={selectedImage} alt="Selected" className=" max-w-full" style={{maxWidth:'60vw',maxHeight:'50vh'}}/>
          <button className="absolute top-4 right-4 text-white hover:text-gray-200" onClick={handleCloseImage}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      )}
      <div className="grid gap-4 grid-cols-2 my-2.5">
        {img.map((i, index) => (
          <div className={`group relative ${!showAllImages && index > 1 ? 'hidden' : ''}`} key={index}>
            <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center " onClick={()=>handleImgClick(i.url)}>
              <button
                className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                onClick={(e) => handleDownloadImgClick(e,i.url)}
              >
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
                </svg>
              </button>
            </div>
            <img src={i.url} className="rounded-lg cursor-pointer" style={{ width: '200px', height: '200px' }} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button onClick={showAllImages ? handleHideAllImages : handleShowAllImages} className="text-sm text-blue-700 dark:text-blue-500 font-medium inline-flex items-center hover:underline">
          {showAllImages ? 'Hide all' : 'Show all'}
        </button>
        {/* <button onClick={handleSaveAllImages} className="text-sm text-blue-700 dark:text-blue-500 font-medium inline-flex items-center hover:underline">
          <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
          </svg>
          Save all
        </button> */}
      </div>
    </div>
  );
}

export default Img;
