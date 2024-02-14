import React, { useState } from 'react'
import googleLogo from "../../assets/img/google.png";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';


function Announcement() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [announcementContent, setAnnouncementContent] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      matchVisual: true,
    },
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  return (

    <div class="mt-5 mx-auto max-w-[1100px] text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 relative">

    <div className="flex items-center p-2">
      <img className="w-8 h-8 rounded-full" src={googleLogo} alt="User" />

      <div className="ml-5"  >
        {
          !isDropdownOpen && (<><h2 className="text-lg font-semibold text-gray-900 dark:text-white" onClick={toggleDropdown}>
              Announce something to your class sd ewkfp qpke qepkp
            </h2><p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Share important updates or information with your students.
              </p></>)
        }
        {
          isDropdownOpen && (<>
                        <ReactQuill
                        theme="snow"
                value={announcementContent}
                onChange={setAnnouncementContent}
                modules={modules}
                formats={formats}
                placeholder="Write something here..."
              
              />
          </>)
        }
        
      </div>
    </div>
  </div>
  )
}

export default Announcement

