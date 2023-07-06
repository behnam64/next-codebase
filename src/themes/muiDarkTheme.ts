import { createTheme } from '@mui/material';

// create a light theme and can get new colors and config for mui
export const muiDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0A1929',
      paper: '#0A1929',
    },
    primary: {
      main: '#237BFE',
    },
    secondary: {
      main: '#EB06FF',
    },
  },
  components: {
    MuiCssBaseline: {
      // gives dark color scheme to html for dark scroll bar and ...
      styleOverrides: (theme: any) => ({
        html: {
          colorScheme: theme.palette.mode,
        },
      }),
    },
  },
});
