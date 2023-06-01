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

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <ContextWrapper>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Wegegta . Portfolio</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </ContextWrapper>
  );
}
