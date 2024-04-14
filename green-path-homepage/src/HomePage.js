// src/HomePage.js
import React from 'react';
import Navbar from './Navbar';
import { Container, Typography, Link } from '@mui/material';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="md" sx={{ marginTop: 4 }}>
                <Typography variant="h2" gutterBottom>
                    Welcome to Green Path
                </Typography>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                    What is a living lab?
                </Typography>
                <Typography variant="body1" paragraph>
                    “A living laboratory is not one room or one building. Using Cornell campus as a living laboratory means harnessing the resources of our entire campus and community to encourage inspiration and innovation for scalable sustainability solutions to address the challenges in the built, living, and social environment.”
                </Typography>
                <Typography variant="body1" paragraph>
                    Source: <Link href="https://sustainablecampus.cornell.edu/living-laboratory" target="_blank" rel="noopener">Cornell Sustainable Campus</Link>
                </Typography>
                <Typography variant="body1" paragraph>
                    “Living Labs (LLs) are open innovation ecosystems in real-life environments using iterative feedback processes throughout a lifecycle approach of an innovation to create sustainable impact. They focus on co-creation, rapid prototyping & testing and scaling-up innovations & businesses, providing (different types of) joint-value to the involved stakeholders. In this context, living labs operate as intermediaries/orchestrators among citizens, research organisations, companies and government agencies/levels. Within a wide variety of living labs, they all have common characteristics, but multiple different implementations.”
                </Typography>
                <Typography variant="body1" paragraph>
                    Source: <Link href="https://enoll.org/about-us/what-are-living-labs/" target="_blank" rel="noopener">European Network of Living Labs</Link>
                </Typography>
                <Typography variant="body1">
                    Learn more about our initiatives and how we are involved in Living Labs on our <Link href="/about">About page</Link>.
                </Typography>
            </Container>
        </>
    );
};

export default HomePage;
