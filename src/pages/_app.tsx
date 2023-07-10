import type { AppProps } from 'next/app';
import ContextWrapper from '@/context';
import Layout from '@/components/commons/layout';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/createEmotoinCache';
import { CssBaseline } from '@mui/material';
import ThemeProvider from '@mui/system/ThemeProvider';
import Head from 'next/head';
import theme from '@/theme';
import '@global/index.scss';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { appWithTranslation } from 'next-i18next';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const useLayout = () => {
  const { pathname } = useRouter();

  // if (pathname.startsWith('/dashboard')) {
  //   return (page: any) => <DashboardLayout>{page}</DashboardLayout>;
  // }

  const LayoutComponent = (page: any) => <Layout pageProps={{}}>{page}</Layout>;

  LayoutComponent.displayName = 'LayoutComponent';

  return LayoutComponent;
};

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const layout = useLayout();

  return (
    <ContextWrapper>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Wegegta . Portfolio</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Toaster position="bottom-left" toastOptions={{}} />
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </ContextWrapper>
  );
}

export default appWithTranslation(MyApp);
