import React, { useState ,useEffect} from "react";
import "./classa.css";
import sideImage from "../../assets/img/background/auth_background_design.jpg";
import googleLogo from "../../assets/img/google.png";

const GoogleClassroomCard = ({ index,title, description, teacher, students, classCode ,menuRef,toggleMenu,setActionClass}) => {






  return (
    <div className="card hover:cursor-pointer" onClick={() => console.log("Card clicked")}>
      <div className="card__img relative">
        <img src={sideImage} alt="Card Image" />

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

  
        <div className="card__title">{title}</div>
        <div className="card__subtitle">{teacher}</div>
      </div>
      <div className="card__avatar">
        <img src={googleLogo} alt="Avatar" />
      </div>
      <div className="card__wrapper">
       
      </div>
    </div>
  );
};

export default GoogleClassroomCard;
