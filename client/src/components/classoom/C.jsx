import React from "react";
import Menubar from "./Menu";
import Title from "./Title";
import Announcement from "./Announcement";
import AnnouncementHistory from "./AnnouncementHistory";
import AnnouncementForm from "./AnnouncementForm";
import { Outlet } from "react-router-dom";



function classroom() {
  return (
    <>
      <Menubar />

<Outlet />


    </>
  );
}

export default classroom;
