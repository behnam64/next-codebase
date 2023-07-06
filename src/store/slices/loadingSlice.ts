import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../../types/StoreType';
import { LoadingSliceType, LoadingType } from '../../types/LoadingType';

const initalLoadingSlice: LoadingSliceType = { loading: false };

export const loadingSlice = createSlice({
  name: SliceNames.loading,
  initialState: initalLoadingSlice,
  reducers: {
    // sets the loading from payload
    set(store, action: PayloadAction<LoadingSliceType>) {
      store.loading = action.payload.loading;
    },
  },
});

export const loadingReducer = loadingSlice.reducer;
export const loadingActions = loadingSlice.actions;
