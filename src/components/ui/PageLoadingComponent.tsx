import { useMainLoading } from '@/hooks/useMainLoading';
import { CircularProgress, Backdrop } from '@mui/material';
import ReactDOM from 'react-dom';

export const PageLoadingComponent = () => {
  const { loading, setLoading } = useMainLoading();

  return (
    <>
      {loading &&
        ReactDOM.createPortal(
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
            onClick={() => setLoading(false)}
          >
            <CircularProgress size={50}></CircularProgress>
          </Backdrop>,
          document.body
        )}
    </>
  );
};
