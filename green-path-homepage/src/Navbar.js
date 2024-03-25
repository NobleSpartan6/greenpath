// src/components/Navbar.js
import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Green Path
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/requirements">
            Major Requirements
          </Button>
          <Button color="inherit" component={Link} to="/courses">
            Browse Courses
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
