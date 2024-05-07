// AssignmentList.js
import React from 'react';
import AssignmentCard from './AssignmentCard';

const AssignmentList = ({ assignments, status }) => {
  return (
    <div>
      {assignments.map((assignment, index) => (
        <AssignmentCard key={index} assignment={assignment} status={status} />
      ))}
    </div>
  );
};

export default AssignmentList;
