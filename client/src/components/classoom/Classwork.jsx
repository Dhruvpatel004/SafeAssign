import React from 'react'
import { useState } from 'react'
import AssignmentList from './classwork/AssignmentList.jsx'
import CreateAssignmentPage from './classwork/CreateAssignmentPage.jsx';
import { useSelector } from 'react-redux';


function Classwork() {
  const userRole = useSelector((state) => state.classroom.userRole);
 // Sample assignments data
 const [assignments, setAssignments] = useState([
  { title: 'Assignment 1', description: 'Description for Assignment 1' },
  { title: 'Assignment 2', description: 'Description for Assignment 2' },
  { title: 'Assignment 3', description: 'Description for Assignment 3' },
]);

return (
  <>
  {
    userRole === 'teacher' && <CreateAssignmentPage/>
  }

  {
    userRole === 'student' && (

      <div className="container mx-auto py-8">
      {/* <h1 className="text-3xl font-bold mb-4">Classwork</h1> */}
      <h2 className="text-xl font-semibold dark:text-gray-300 mb-2">Pending Assignments</h2>
      <AssignmentList assignments={assignments} status="pending" />
      <h2 className="text-xl font-semibold dark:text-gray-300 mb-2">Completed Assignments</h2>
      <AssignmentList assignments={assignments} status="completed" />
    </div>
    )
  }

  </>
);
}

export default Classwork