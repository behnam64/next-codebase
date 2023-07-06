import {
  NotificationMessageType,
  NotificationSliceType,
  NotificationSlicePayloadType,
} from '@/types/NotificationType';
import { SliceNames } from '@/types/StoreType';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialNotificationSlice: NotificationSliceType = { notifications: [] };

export const notificationSlice = createSlice({
  name: SliceNames.notification,
  initialState: initialNotificationSlice,
  reducers: {
    add(store, action: PayloadAction<NotificationSlicePayloadType>) {
      const exists = store.notifications.some((message) => message === action.payload.notification);
      if (!exists) {
        store.notifications.push(action.payload.notification);
      }
    },
    remove(store, action: PayloadAction<NotificationSlicePayloadType>) {
      store.notifications = store.notifications.filter(
        (message: NotificationMessageType) => action.payload.notification !== message
      );
    },
    clear(store) {
      store.notifications = [];
    },
  },
});

export const notificationReducer = notificationSlice.reducer;
export const notificationActions = notificationSlice.actions;
