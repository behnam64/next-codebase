import { StoreType } from '@/types/StoreType';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { SnackbarProvider, enqueueSnackbar, closeSnackbar } from 'notistack';
import { useEffect } from 'react';
import { notificationActions } from '@/store/slices/notificationSlice';

export const NotiStackComponent = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((store: StoreType) => store.notification.notifications);

  useEffect(() => {
    notifications.forEach((notification) => {
      enqueueSnackbar(notification.message, {
        variant: notification.variant,
        action: (key: any) => (
          <>
            <Button size='small' color='inherit' onClick={() => closeSnackbar(key)}>
              Close
            </Button>
          </>
        ),
      });
    });
    if (notifications.length) {
      dispatch(notificationActions.clear());
    }
  }, [notifications]);

  return (
    <SnackbarProvider maxSnack={4} autoHideDuration={1000000}></SnackbarProvider>
  );
};
