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
import { MainLoadingComponent } from '@/components/MainLoadingComponent';
import { HeadComponent } from '@/components/config/HeadComponent';
import { NotiStackComponent } from '@/components/ui/NotiStackComponent';

export default function App(appProps: AppProps) {
  return (
    <Provider store={getMainStore()}>
      <InnerApp {...appProps} />
    </Provider>
  );
}

function InnerApp(appProps: AppProps) {
  const { muiTheme } = useMuiTheme();

  const queryClientConfig = useQueryClientConfig();

  return (
    <QueryClientProvider client={queryClientConfig}>
      <Hydrate state={appProps.pageProps.dehydratedState}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <GlobalStylesComponent />
          <MainLoadingComponent></MainLoadingComponent>
          <NotiStackComponent></NotiStackComponent>
          <HeadComponent></HeadComponent>
          <appProps.Component {...appProps.pageProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
