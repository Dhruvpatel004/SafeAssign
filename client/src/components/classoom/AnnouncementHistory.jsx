import React, { useEffect } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setClassAnnouncements } from '../../store/slice/classroomReducer.js';
import Message from './Message';

function AnnouncementHistory() {
  const classID = useSelector(state => state.classroom.classID);

  const announcements = useSelector(state => state.classroom.announcements);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Announcement History";

    const fetchAnnouncements = async () => {
      try {
        const data = {
          classroomID: classID
        };

        const response = await axios.post(`${API_BASE_URL}/api/classroom/get-announcements`, data, {
          withCredentials: true,
        });
        // console.log(response.data);

        dispatch(setClassAnnouncements(response.data));
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, []);
  useEffect(() => {
    console.log(announcements);
  }
  , [announcements]);
  return (
    <div className="p-2 mt-5 mx-auto max-w-[1100px] text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 relative">
      {announcements.map((announcement, index) => (
        <Message key={index} announcement={announcement} />
      ))}
      {/* <Message /> */}
    
    </div>
  );
}

export default AnnouncementHistory;
