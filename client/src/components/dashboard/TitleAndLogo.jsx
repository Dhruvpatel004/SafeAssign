import React from 'react'
import logoImage from "../../assets/img/logo_SafeAssign.png";

function TitleAndLogo() {
  return (
    <div className="flex items-center justify-start rtl:justify-end">
    <a href="http://localhost:5173/" className="flex ms-2 md:me-24">
      <img src={logoImage} className="h-8 me-3" alt="SafeAssign Logo" />
      <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
        SafeAssign
      </span>
    </a>
  </div>
  )
}

export default TitleAndLogo