import React from 'react'
import pic from "./../../assets/Honors.jpg";
import { useSelector } from 'react-redux';
function Title() {
  const classData = useSelector(state => state.class.classData);
  return (
<div className="mt-5 mx-auto max-w-[1100px] text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 relative">
  <img src={pic} alt="" className="rounded-lg w-full h-full object-cover p-0 m-0" />
  <h3 className="mb-5 text-lg font-medium text-gray-500 sm:text-xl lg:text-3xl dark:text-gray-400 absolute bottom-0 left-1 lg:bottom-20 lg:left-20">
  {classData.classroomName}
  </h3>
</div>






  )
}

export default Title