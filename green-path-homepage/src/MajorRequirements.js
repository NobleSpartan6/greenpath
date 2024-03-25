// src/MajorRequirements.js
import React, { useState } from 'react';
import Navbar from './Navbar';

const MajorRequirements = () => {
  
  const [selectedMajor, setSelectedMajor] = useState('');

  // Example list of majors, replace with your actual data
  const majors = [
    { name: 'Computer Science', id: 'cs' },
    { name: 'Electrical Engineering', id: 'ee' },
    // Add more majors here
  ];

  // Example requirements, replace with your actual data
  const requirements = {
    cs: {
      coreRequirements: ['CS 1110', 'CS 2110'],
      technicalElectives: ['BTRY 3080', 'CS 3300'],
      // Add more requirement types and courses here
    },
    ee: {
      coreRequirements: ['major cap data', 'fake data moment'],
      technicalElectives: ['some more cap data', 'lorem ipsum ts'],
    },
    // Add requirements for other majors here
  };

  const handleMajorChange = (event) => {
    setSelectedMajor(event.target.value);
  };

  const renderCourseCards = (courseList) => {
    return courseList.map((course, index) => (
      <div className="course-card" key={index}>
        {course}
      </div>
    ));
  };

  const selectedMajorRequirements = requirements[selectedMajor];

  return (
    <>
   <Navbar/>
    <div className="major-requirements">
      <h1>Major Requirements</h1>
      <select value={selectedMajor} onChange={handleMajorChange}>
        <option value="">Select Your Major</option>
        {majors.map((major) => (
          <option key={major.id} value={major.id}>
            {major.name}
          </option>
        ))}
      </select>

      {selectedMajorRequirements && (
        <div>
          <h2>Core Requirements</h2>
          {selectedMajorRequirements.coreRequirements &&
            renderCourseCards(selectedMajorRequirements.coreRequirements)}

          <h2>Technical Electives</h2>
          {selectedMajorRequirements.technicalElectives &&
            renderCourseCards(selectedMajorRequirements.technicalElectives)}

          {/* ... render other requirement categories similarly */}
        </div>
      )}
    </div>
    </>
  );
};

export default MajorRequirements;