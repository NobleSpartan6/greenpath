import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Container, Typography, Box, Card, CardContent, TextField, MenuItem, Grid } from '@mui/material';
import Papa from 'papaparse';

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [filters, setFilters] = useState({
        department: '',
        credit: '',
        semester: '',
        faculty: ''
    });

    useEffect(() => {
        const csvFiles = [
            '/dataset/Sustainability_Classes_Sustainability_Classes.csv',
            '/dataset/Sustainability_Classes_Liberal_Studies.csv',
        ];

        const parseCSV = async (filePath) => {
            const response = await fetch(process.env.PUBLIC_URL + filePath);
            const text = await response.text();
            return Papa.parse(text, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
            }).data;
        };

        const loadCourses = async () => {
            let loadedCourses = [];
            for (let file of csvFiles) {
                const result = await parseCSV(file);
                loadedCourses = loadedCourses.concat(result);
            }
            setCourses(loadedCourses);
            setFilteredCourses(loadedCourses);
        };

        loadCourses();
    }, []);

    useEffect(() => {
        const applyFilters = () => {
            let updatedCourses = courses.filter(course =>
                (filters.department ? course.Dept === filters.department : true) &&
                (filters.credit ? course.Credit === Number(filters.credit) : true) &&
                (filters.semester ? course.Semester === filters.semester : true) &&
                (filters.faculty ? course.Faculty.toLowerCase().includes(filters.faculty.toLowerCase()) : true)
            );
            setFilteredCourses(updatedCourses);
        };

        applyFilters();
    }, [filters, courses]);

    const handleChange = (event) => {
        setFilters(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };

    const uniqueDepartments = [...new Set(courses.map(course => course.Dept))].sort();
    const uniqueCredits = [...new Set(courses.filter(course => typeof course.Credit !== 'string').map(course => course.Credit))].sort((a, b) => a - b);
    const uniqueSemesters = [...new Set(courses.map(course => course.Semester))].sort();
    
    return (
        <>
            <Navbar />
            <Container maxWidth="lg" sx={{ marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Browse Courses
                </Typography>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid item xs={12} md={3}>
                        <TextField
                            select
                            label="Department"
                            value={filters.department}
                            onChange={handleChange}
                            fullWidth
                            name="department"
                        >
                            <MenuItem value="">All Departments</MenuItem>
                            {uniqueDepartments.map((dept) => (
                                <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            select
                            label="Credits"
                            value={filters.credit}
                            onChange={handleChange}
                            fullWidth
                            name="credit"
                        >
                            <MenuItem value="">Any Credits</MenuItem>
                            {uniqueCredits.map((credit) => (
                                <MenuItem key={credit} value={credit}>{credit}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            select
                            label="Semester"
                            value={filters.semester}
                            onChange={handleChange}
                            fullWidth
                            name="semester"
                        >
                            <MenuItem value="">Any Semester</MenuItem>
                            {uniqueSemesters.map((semester) => (
                                <MenuItem key={semester} value={semester}>{semester}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            label="Faculty"
                            value={filters.faculty}
                            onChange={handleChange}
                            fullWidth
                            name="faculty"
                        />
                    </Grid>
                </Grid>
                {filteredCourses.length > 0 ? filteredCourses.map((course, index) => (
                    <Card key={index} sx={{ marginBottom: 2 }}>
                        <CardContent>
                            <Typography variant="h5">{course.Title}</Typography>
                            <Typography variant="subtitle1">
                                {course.Dept} {course['Course #']}
                            </Typography>
                            <Typography variant="body1">{course.Semester} | {course.Credit} Credits</Typography>
                            <Typography variant="body1">Faculty: {course.Faculty}</Typography>
                            <Typography variant="body1">Cross-listed as: {course.Crosslists}</Typography>
                        </CardContent>
                    </Card>
                )) : (
                    <Typography variant="h6" color="textSecondary">No courses match the selected filters.</Typography>
                )}
            </Container>
        </>
    );
};

export default CoursesPage;
