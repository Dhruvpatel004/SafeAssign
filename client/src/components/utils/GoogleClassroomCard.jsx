import React, { useState ,useEffect} from "react";
import "./classa.css";
import Honors from "../../assets/Honors.jpg";
import img_bookclub from "../../assets/img_bookclub.jpg";
import img_breakfast from "../../assets/img_breakfast.jpg";
import { useNavigate } from "react-router-dom";

import googleLogo from "../../assets/img/google.png";

const GoogleClassroomCard = ({ data,index,menuRef,toggleMenu}) => {


  const navigate = useNavigate();

  const handleClasss = (event) => {
    navigate('c/') ;
   }
  



  return (
    <div className="card hover:cursor-pointer" onClick={handleClasss}>
      <div className="card__img relative">
        <img src={img_bookclub} alt="Card Image" />

        <div className="card__menu absolute top-0 right-0 z-10 p-2" onClick={(e)=>toggleMenu(e,index)} ref={menuRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path fill="#fff" d="M6 6h8v2H6zm0 4h8v2H6zm0 4h8v2H6z"></path>
          </svg>

          
        </div>

  
        <div className="card__title">{data.classroomName}</div>
        <div className="card__subtitle">{data.ownerName}</div>
      </div>
      <div className="card__avatar">
        <img src={data.ownerAvatar} alt="Avatar" style={{borderRadius:"50px"}}/>
      </div>
      <div className="card__wrapper" onChange={(e)=>{    e.stopPropagation();}}>
        <br />
        <br />
        <br />
       <p className="text-gray-700 hover:bg-gray-300 dark:text-gray-300">Class Code : {data.classroomID}</p>
       <p className="text-gray-700 hover:bg-gray-300 dark:text-gray-300">Role :{data.userRole}</p>
      </div>
    </div>
  );
};

export default GoogleClassroomCard;
