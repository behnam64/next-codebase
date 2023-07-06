import { notificationActions } from '@/store/slices/notificationSlice';
import { ResponseType } from '@/types/ResponseType';
import { MutationCache, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const useQueryClientConfig = () => {
  const dispatch = useDispatch();

  const mutationCache = new MutationCache({
    onError: (err) => {
      const error = err as ResponseType<any>;
      if (error.statusCode === 403) {
        dispatch(notificationActions.add({ notification: { variant: 'error', message: 'Forbidden error' } }));
      } else if (error.statusCode === 401) {
        dispatch(notificationActions.add({ notification: { variant: 'error', message: 'Authorization error' } }));
      } else if (error.statusCode === 500) {
        dispatch(notificationActions.add({ notification: { variant: 'error', message: 'Server error' } }));
      }
    },
  });

  const [queryClient] = useState(
    () =>
      new QueryClient({
        mutationCache,
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            retry: 0,
          },
        },
      })
  );

  return queryClient;
};
