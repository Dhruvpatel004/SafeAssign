import React, { useState } from 'react'
import googleLogo from "../../assets/img/google.png";
import { Editor } from '@tinymce/tinymce-react';


function Announcement() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [announcementContent, setAnnouncementContent] = useState('');

  const handleEditorChange = (content, editor) => {
    setAnnouncementContent(content)
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



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
          <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}> 

<Editor
        apiKey="lypi899eajuaveky9npx24ytyulm2cceqx4k4nxwqu7h5hin"
        initialValue="<p>Write something...</p>"
        init={{
          // height: 500,
          // width: '800', // Set the width of the editor to 100%
          menubar: true,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | image | youtube'
        }}
        onEditorChange={handleEditorChange}
      />
    </div>

          </>)
        }
        
      </div>
    </div>
  </div>
  )
}

export default Announcement

