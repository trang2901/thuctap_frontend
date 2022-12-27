import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookies } from 'cookies-next';
import Head from 'next/head';
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  MantineThemeOverride,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import './../App.css';
import { AuthProvider } from '../contexts/AuthContext';
import { SessionProvider } from 'next-auth/react';
import { OrganizationProvider } from '@context/OrganizationContext';

import { Provider } from 'react-redux';
import store from '@stores/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ModalsProvider } from '@mantine/modals';

import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);

import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

import '../app/styles/plugins/nprogress.css';
// import "../app/styles/plugins/split.scss";
// import "../app/styles/main.scss";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: any;
};

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const persistor = persistStore(store);

// function MyApp({ Component, pageProps }: AppPropsWithLayout) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout ?? ((page) => page)

//   return getLayout(
//     <>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <DefaultSeo {...SEO} />
//           <Component {...pageProps} />
//         </PersistGate>
//       </Provider>
//     </>
//   )
// }

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = (value: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const getLayout = Component.getLayout || ((page) => page);

  const theme: MantineThemeOverride = {
    colorScheme,
    breakpoints: {
      xs: 500,
      sm: 800,
      md: 1000,
      lg: 1200,
      xl: 1400,
    },
    colors: {
      // Add your color
      'deep-blue': ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
    },
    shadows: {
      md: '1px 1px 3px rgba(0,0,0,.25)',
      xl: '5px 5px 3px rgba(0,0,0,.25)',
    },
    fontFamily: "'Nunito Sans', sans-serif",
    fontFamilyMonospace: "'Roboto Mono', monospace",
  };

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/AdminLTE.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/custom-lte.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        ></link>
        <link rel="stylesheet" href="/style.css"></link>
      </Head>

      <SessionProvider session={session}>
        <OrganizationProvider>
          <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <AuthProvider>
              <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
                <ModalsProvider>
                  <NotificationsProvider>
                    {getLayout(
                      <Provider store={store}>
                        <DefaultSeo {...SEO} />
                        <Component {...pageProps} />
                      </Provider>
                    )}
                  </NotificationsProvider>
                  </ModalsProvider>
              </MantineProvider>
            </AuthProvider>
          </ColorSchemeProvider>
        </OrganizationProvider>
      </SessionProvider>
    </>
  );
}

// App.getInitialProps = ({ ctx }: any) => {
//   console.log("=============== CONTEXT", ctx.session);
//   return {
//     colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
//   }
// }
