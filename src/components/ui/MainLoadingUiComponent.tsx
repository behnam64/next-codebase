import { useMainLoading } from '@/hooks/useMainLoading';
import { CircularProgress, Backdrop } from '@mui/material';
import ReactDOM from 'react-dom';

type PropsType = {
  loading: boolean;
};

export const MainLoadingUiComponent = (props: PropsType) => {
  return (
    <>
      {props.loading &&
        ReactDOM.createPortal(
          <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
            <CircularProgress size={50}></CircularProgress>
          </Backdrop>,
          document.body
        )}
    </>
  );
};
