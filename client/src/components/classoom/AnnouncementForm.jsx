import React from 'react';

function AnnouncementForm() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Announce something to your class</h1>
      <form className="flex flex-col">
        <div className="mb-4">
          <label htmlFor="announcement" className="block text-lg font-medium mb-2">
            Announcement
          </label>
          <textarea
            id="announcement"
            rows="4"
            className="shadow-sm rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="attachments" className="block text-lg font-medium mb-2">
            Attachments (optional)
          </label>
          <div className="flex items-center space-x-2">
            <input
              id="attachments"
              type="file"
              multiple
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="button"
              className="inline-block px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <button
            type="button"
            className="inline-block px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Post
          </button>
          <button
            type="button"
            className="inline-block px-3 py-2 text-sm font-medium text-center text-gray-500 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AnnouncementForm;
