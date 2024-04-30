import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Container, Typography, Select, MenuItem, Box } from '@mui/material';
import Papa from 'papaparse';

const MajorRequirements = () => {
  const [majors, setMajors] = useState([]);
  const [selectedMajor, setSelectedMajor] = useState('');
  const [coursesByCategory, setCoursesByCategory] = useState({});

  const csvFilePaths_unsorted = {
    'Computer Science': `${process.env.PUBLIC_URL}/dataset/Sustainability_Classes_CS.csv`,
    'Electrical Engineering': `${process.env.PUBLIC_URL}/dataset/Sustainability_Classes_ECE.csv`,
    'Engineering Physics' : `${process.env.PUBLIC_URL}/dataset/Sustainability_Classes_Engineering_Physics.csv`,
    'ORIE' : `${process.env.PUBLIC_URL}/dataset/Sustainability_Classes_ORIE.csv`,
    'Mechanical Engineering' : `${process.env.PUBLIC_URL}/dataset/Sustainability_Classes_Mechanical_Engineering.csv`,
    'Material Science' : `${process.env.PUBLIC_URL}/dataset/Sustainability_Classes_Material_Science.csv`,
    'Information Science, Systems & Technology' : `${process.env.PUBLIC_URL}/dataset/Sustainability_Classes_ISST.csv`,
    'Earth and Atmospheric Sciences' : `${process.env.PUBLIC_URL}/dataset/Sustainability_Classes_EAS.csv`,
    'Civil Engineering': `${process.env.PUBLIC_URL}/dataset/Sustainability_Classes_Civil_Engineering.csv`,
    'Chemical Engineering': `${process.env.PUBLIC_URL}/dataset/Sustainability_Classes_Chemical_Engineering.csv`,
    'Biomedical Engineering': `${process.env.PUBLIC_URL}/dataset/Sustainability_Classes_Biomedical_Engineering.csv`,
    'Biological Engineering': `${process.env.PUBLIC_URL}/dataset/Sustainability_Classes_Biological_Engineering.csv`,
    'Environmental Engineering': `${process.env.PUBLIC_URL}/dataset/Sustainability_Classes_Environmental_Engineering.csv`
  };
  const sortedKeys = Object.keys(csvFilePaths_unsorted).sort();
  const csvFilePaths = {};
  sortedKeys.forEach(key => {
    csvFilePaths[key] = csvFilePaths_unsorted[key];
  });
  

  useEffect(() => {
    const parseCSV = (csvText) => {
      return new Promise((resolve) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            resolve(results.data);
          },
        });
      });
    };

    const fetchAndParseCSVs = async () => {
      let newCoursesByCategory = {};

      for (const [major, path] of Object.entries(csvFilePaths)) {
        const response = await fetch(path);
        const csvText = await response.text();
        const courses = await parseCSV(csvText);

        const coursesByCategory = courses.reduce((acc, course) => {
          if (!course || !course.Category || !course['Sub-Category']) {
            return acc;
          }

          const category = course.Category.trim();
          const subCategory = course['Sub-Category'].trim();

          acc[category] = acc[category] || {};
          acc[category][subCategory] = acc[category][subCategory] || [];

          acc[category][subCategory].push({
            Dept: course.Dept?.trim(),
            'Course #': course['Course #']?.toString().trim(),
            Title: course.Title?.trim(),
            Semester: course.Semester?.trim(),
            Credit: course.Credit?.toString().trim(),
            Faculty: course.Faculty?.trim(),
            Crosslists: course.Crosslists?.trim() || '',
          });

          return acc;
        }, {});

        newCoursesByCategory[major] = coursesByCategory;
      }

      setCoursesByCategory(newCoursesByCategory);
      setMajors(Object.keys(newCoursesByCategory));
    };

    fetchAndParseCSVs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMajorChange = (event) => {
    setSelectedMajor(event.target.value);
  };

  const renderCourseCards = (courses) => {
    return courses.map((course, index) => (
        <Box className="course-card" key={index}>
          <Typography variant="h6">{course.Title}</Typography>
          <Typography variant="body1">{course.Dept} {course['Course #']}</Typography>
          <Typography variant="body1">Offered in the {course.Semester}</Typography>
          <Typography variant="body1">{course.Credit} Credits</Typography>
          <Typography variant="body1">Faculty: {course.Faculty}</Typography>
          <Typography variant="body1">{course.Crosslists || ''}</Typography>
        </Box>
    ));
  };

  const renderCategories = (categories) => {
    return Object.entries(categories).map(([categoryName, subCategories]) => {
      if (!categoryName) return null;

      return (
          <Box key={categoryName}>
            <Typography variant="h5">{categoryName}</Typography>
            {Object.entries(subCategories).map(([subCategoryName, courses]) => {
              if (!subCategoryName) return null;

              return (
                  <Box key={subCategoryName}>
                    <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                      {subCategoryName}
                    </Typography>
                    {renderCourseCards(courses)}
                  </Box>
              );
            })}
          </Box>
      );
    });
  };

  const selectedMajorCategories = coursesByCategory[selectedMajor] || {};

  return (
      <>
        <Navbar />
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
              {majors.map((majorName) => (
                  <MenuItem key={majorName} value={majorName}>
                    {majorName}
                  </MenuItem>
              ))}
            </Select>
          </Box>
          {renderCategories(selectedMajorCategories)}
        </Container>
      </>
  );
};

export default MajorRequirements;