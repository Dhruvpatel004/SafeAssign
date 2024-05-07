import React from 'react';

const AssignmentCard = ({ assignment, status }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-semibold dark:text-gray-300 mb-2">{assignment.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{assignment.description}</p>
      <p className={status === 'pending' ? 'text-yellow-500' : 'text-green-500'}>
        {status === 'pending' ? 'Pending' : 'Completed'}
      </p>
    </div>
  );
};

export default AssignmentCard;
