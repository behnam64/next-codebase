import { themeActions } from './../store/slices/themeSlice';
import { useEffect } from 'react';
import { createTheme, useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeEnum } from '../types/ThemeType';
import { SliceNames, StoreType } from '../types/StoreType';
import { muiDarkTheme } from '@/themes/muiDarkTheme';
import { muiLightTheme } from '@/themes/muiLightTheme';

export const useMuiTheme = () => {
  const dispatch = useDispatch();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const themeStore = useSelector((store: StoreType) => store.theme.theme);

  // sets the theme based on system theme
  let theme = prefersDarkMode ? ThemeEnum.dark : ThemeEnum.light;

  // overwrides the theme based on store
  if (themeStore === ThemeEnum.dark) {
    theme = ThemeEnum.dark;
  } else if (themeStore === ThemeEnum.light) {
    theme = ThemeEnum.light;
  }

  const setTheme = (theme: ThemeEnum) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(SliceNames.theme, theme);
    }
    dispatch(themeActions.set({ theme: theme }));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageTheme = localStorage.getItem(SliceNames.theme) as ThemeEnum | null;
      if (storageTheme) {
        setTheme(storageTheme);
      }
    }
  }, []);

  let muiTheme = theme === ThemeEnum.dark ? muiDarkTheme : muiLightTheme;

  return { theme, muiTheme, setTheme };
};
