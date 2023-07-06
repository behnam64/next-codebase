import { themeActions } from './../store/slices/themeSlice';
import { useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeEnum } from '../types/ThemeType';
import { SliceNames, StoreType } from '../types/StoreType';
import { muiDarkTheme } from '@/themes/muiDarkTheme';
import { muiLightTheme } from '@/themes/muiLightTheme';

export const useMuiTheme = () => {
  const dispatch = useDispatch();

  const systemTheme = useMediaQuery('(prefers-color-scheme: dark)') ? ThemeEnum.dark : ThemeEnum.light;

  const storeTheme = useSelector((store: StoreType) => store.theme.theme);

  let theme = systemTheme;

  if (storeTheme === ThemeEnum.dark) {
    theme = ThemeEnum.dark;
  } else if (storeTheme === ThemeEnum.light) {
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
