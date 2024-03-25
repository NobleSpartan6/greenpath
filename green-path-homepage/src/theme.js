import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // A rich green, similar to what you've been using
      main: '#4CAF50',
      contrastText: '#ffffff', // Ensuring text is readable on primary color
    },
    secondary: {
      // A complementary color, slightly muted
      main: '#f0f4c3',
      contrastText: '#333333', // Dark text for contrast
    },
    background: {
      default: '#f5f5f5', // A light grey background for the pages
      paper: '#ffffff', // Background for components resembling paper
    },
    text: {
      primary: '#333333', // Main text color
      secondary: '#555555', // Secondary text color for less emphasis
    },
  },
  typography: {
    fontFamily: [
      'Roboto', 
      '"Helvetica Neue"', 
      'Arial', 
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
      margin: '2rem 0',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
      margin: '1.5rem 0',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none', // Buttons have the text in normal case, not uppercase
      fontWeight: 500,
      fontSize: '1rem'
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#4CAF50', // Keep AppBar consistent with primary color
        },
      },
    },
    // Any other component overrides go here
  },
  spacing: 8, // Default spacing multiplier in the theme
});

export default theme;
