import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../../types/StoreType';
import { ThemeEnum, ThemeSliceType } from '../../types/ThemeType';

const initalThemeSlice: ThemeSliceType = { theme: ThemeEnum.system };

export const themeSlice = createSlice({
  name: SliceNames.theme,
  initialState: initalThemeSlice,
  reducers: {
    // sets the theme from payload and then ads it to the localstorage
    set(store, action: PayloadAction<ThemeSliceType>) {
      store.theme = action.payload.theme;
      if (typeof window !== 'undefined') {
        localStorage.setItem(SliceNames.theme, action.payload.theme);
      }
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const themeActions = themeSlice.actions;
