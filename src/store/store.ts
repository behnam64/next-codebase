import { configureStore } from '@reduxjs/toolkit';
import { SliceNames } from '../types/StoreType';
import { themeReducer } from './slices/themeSlice';
import { loadingReducer } from './slices/loadingSlice';
import { notificationReducer } from './slices/notificationSlice';

export const getMainStore = () => {
  const store = configureStore({
    reducer: {
      [SliceNames.theme]: themeReducer,
      [SliceNames.loading]: loadingReducer,
      [SliceNames.notification]: notificationReducer,
    },
  });
  return store;
};
