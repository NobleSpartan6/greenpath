// src/AboutPage.js
import React from 'react';
import Navbar from './Navbar';
import { Container, Typography, Box } from '@mui/material';

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="md" sx={{ marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>
                    About Green Path
                </Typography>
                <Typography variant="body1" paragraph>
                    We created this website to enable engineering students to find environmental courses that count towards graduation requirements, thereby increasing Cornell’s collective knowledge on sustainability. While not all classes that we connect students with will be Living Labs classes, we hope to strengthen Cornell’s ability to act as a Living Laboratory by enhancing student involvement with environmentalism.
                </Typography>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        FAQ
                    </Typography>
                    <Typography variant="h6">So what really is a living lab?</Typography>
                    <Typography variant="body1" paragraph>
                        A living lab is a project or laboratory that harnesses the Cornell campus and community to encourage innovation for scalable sustainability solutions. The three desired outcomes from Living Labs include: campus improvement, behavioral change, and campus study.
                    </Typography>
                    <Typography variant="h6">Who created this website?</Typography>
                    <Typography variant="body1" paragraph>
                        This website was created by Team 3 in ENGRC 3350, a multidisciplinary group of engineering students, bringing unique technical insights.
                    </Typography>
                    <Typography variant="h6">Who is this website tailored to?</Typography>
                    <Typography variant="body1" paragraph>
                        This website is tailored to students who are interested in Living Labs and sustainability and still need to fulfill engineering graduation requirements.
                    </Typography>
                    <Typography variant="h6">Why did we create this website?</Typography>
                    <Typography variant="body1" paragraph>
                        We created this website to enable engineering students to find environmental courses that count towards graduation requirements, thereby increasing Cornell’s collective knowledge on sustainability. While not all classes that we connect students with will be Living Labs classes, we hope to strengthen Cornell’s ability to act as a Living Laboratory by enhancing student involvement with environmentalism.
                    </Typography>
                    <Typography variant="h6">How were classes identified as sustainability classes?</Typography>
                    <Typography variant="body1" paragraph>
                        "Courses and programs are determined based on their sustainability focus and inclusivity as defined in STARS. The Cornell registrar provides CSO with the course descriptions of all courses offered in an academic year, with many sustainability courses being tagged with the SBY course attribute for their sustainability component. However, this is an ongoing process that is unfortunately not yet comprehensive. Thus, each description is then analyzed based on definitions in the STARS technical manual to decide the course’s eligibility for sustainability."
                        -Meredith Rutherford
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default AboutPage;
