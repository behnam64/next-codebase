import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../types/StoreType';
import { loadingActions } from '../store/slices/loadingSlice';
import { Router } from 'next/router';
import { LoadingType } from '../types/LoadingType';

export const useMainLoading = () => {
  const dispatch = useDispatch();

  const loading = useSelector((store: StoreType) => store.loading.loading);
  Router.events.on('routeChangeStart', () => dispatch(loadingActions.set({ loading: true })));
  Router.events.on('routeChangeComplete', () => dispatch(loadingActions.set({ loading: false })));
  Router.events.on('routeChangeError', () => dispatch(loadingActions.set({ loading: false })));

  const setLoading = (loading: LoadingType) => {
    dispatch(loadingActions.set({ loading: loading }));
  };

  return { loading, setLoading };
};
