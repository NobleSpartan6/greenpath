// src/MajorRequirements.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import { Container, Typography, Select, MenuItem, Card, CardContent, Box } from '@mui/material';

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
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Major Requirements
        </Typography>
        <Box sx={{ minWidth: 120 }}>
          <Select
            value={selectedMajor}
            onChange={handleMajorChange}
            displayEmpty
            fullWidth
            variant="outlined"
            sx={{ mb: 3 }}
          >
            <MenuItem value="" disabled>
              <em>Select Your Major</em>
            </MenuItem>
            {majors.map((major) => (
              <MenuItem key={major.id} value={major.id}>
                {major.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        {selectedMajorRequirements && (
          <>
            <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
              Core Requirements
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
              {selectedMajorRequirements.coreRequirements &&
                renderCourseCards(selectedMajorRequirements.coreRequirements)}
            </Box>

            <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
              Technical Electives
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
              {selectedMajorRequirements.technicalElectives &&
                renderCourseCards(selectedMajorRequirements.technicalElectives)}
            </Box>

            {/* Render other requirement categories similarly */}
          </>
        )}
      </Container>
    </>
  );
};

export default MajorRequirements;