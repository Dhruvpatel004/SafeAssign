import React, { useState } from 'react';

const CreateAssignmentPage = () => {
  const [assignmentName, setAssignmentName] = useState('');
  const [assignmentDescription, setAssignmentDescription] = useState('');
  const [assignments, setAssignments] = useState([]);

  const handleCreateAssignment = () => {
    // Assuming you have a backend to handle assignment creation
    const newAssignment = {
      name: assignmentName,
      description: assignmentDescription,
    };

    // Here you would send the assignment data to your backend
    // and then add the assignment to the list of assignments
    setAssignments([...assignments, newAssignment]);

    // Clear input fields after creating assignment
    setAssignmentName('');
    setAssignmentDescription('');
  };

  const handleRemoveAssignment = (index) => {
    // Remove assignment from list based on its index
    const updatedAssignments = [...assignments];
    updatedAssignments.splice(index, 1);
    setAssignments(updatedAssignments);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Create and Remove Assignments</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Assignment Name"
          value={assignmentName}
          onChange={(e) => setAssignmentName(e.target.value)}
          className="border border-gray-400 rounded-md px-4 py-2 w-full mb-2"
        />
        <textarea
          placeholder="Assignment Description"
          value={assignmentDescription}
          onChange={(e) => setAssignmentDescription(e.target.value)}
          className="border border-gray-400 rounded-md px-4 py-2 w-full mb-2"
        ></textarea>
        <button
          onClick={handleCreateAssignment}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
        >
          Create Assignment
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">Assignments</h2>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index} className="border border-gray-300 rounded-md px-4 py-2 mb-2 flex justify-between items-center">
            <div>
              <h3 className="font-bold">{assignment.name}</h3>
              <p>{assignment.description}</p>
            </div>
            <button
              onClick={() => handleRemoveAssignment(index)}
              className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateAssignmentPage;
