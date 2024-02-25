import React from "react";
import Menubar from "./Menu";
import Title from "./Title";
import Announcement from "./Announcement";
import AnnouncementHistory from "./AnnouncementHistory";
import AnnouncementForm from "./AnnouncementForm";



function classroom() {
  return (
    <>
      <Menubar />

      <Title />

      <Announcement />

{/* <AnnouncementForm/> */}
    <AnnouncementHistory/>


    </>
  );
}

export default classroom;
