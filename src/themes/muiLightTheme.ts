import { createTheme } from '@mui/material';

// create a light theme and can get new colors and config for mui
export const muiLightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fff',
      paper: '#fff',
    },
    primary: {
      main: '#237BFE',
    },
    secondary: {
      main: '#EB06FF',
    },
  },
});
