import { CssBaseline, ThemeProvider } from '@mui/material';
import {GlobalStylesComponent} from '../src/styles/GlobalStyles';
import { muiLightTheme } from '../src/themes/muiLightTheme';
import { muiDarkTheme } from '../src/themes/muiDarkTheme';
import { useMemo } from 'react';

const THEMES = {
  light: muiLightTheme,
  dark: muiDarkTheme,
};

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;
  const theme = useMemo(() => THEMES[themeKey] || THEMES['light'], [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStylesComponent />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];

export const globalTypes = {
  theme: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [
        { value: 'light', left: '☀️', title: 'Light mode' },
        { value: 'dark', left: '🌙', title: 'Dark mode' },
      ],
    },
  },
};
