import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Green Path
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/requirements">Major Requirements</Button>
            <Button color="inherit" component={Link} to="/courses">Browse Courses</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
          </Box>
          <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/requirements">Major Requirements</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/courses">Browse Courses</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/about">About</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
