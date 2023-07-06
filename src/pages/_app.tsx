import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { getMainStore } from '../store/store';
import { QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { useQueryClientConfig } from '../hooks/useQueryClientConfig';
import { GlobalStylesComponent } from '@/styles/GlobalStyles';
import { useMuiTheme } from '@/hooks/useMuiTheme';
import { PageLoadingComponent } from '@/components/ui/PageLoadingComponent';
import { HeadComponent } from '@/components/config/HeadComponent';
import { NotiStackComponent } from '@/components/ui/NotiStackComponent';

export default function App(appProps: AppProps) {
  return (
    <Provider store={getMainStore()}>
      <InnerApp {...appProps} />
    </Provider>
  );
}

// this component is because the rest of the configuration needed redux store
function InnerApp(appProps: AppProps) {
  // returns mui theme based on system theme and store
  const { muiTheme } = useMuiTheme();

  // react query default configuration return queryClient
  const queryClient = useQueryClientConfig();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={appProps.pageProps.dehydratedState}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <GlobalStylesComponent />
          <PageLoadingComponent></PageLoadingComponent>
          <NotiStackComponent></NotiStackComponent>
          <HeadComponent></HeadComponent>
          <appProps.Component {...appProps.pageProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
