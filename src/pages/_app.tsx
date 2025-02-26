import { AppPropsWithLayout } from '../types';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { RootLayout } from 'src/layouts';
import { queryClient } from 'src/libs/react-query';

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  //SECTION Google Analytics
  const router = useRouter();

  useEffect(() => {
    // Google Analytics 초기화 (환경 변수가 설정되었을 때만)
    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      // ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
      // // 페이지 뷰 추적
      // const handleRouteChange = (url: string) => {
      //   ReactGA.send({ hitType: 'page_view', page: url });
      // };
      // router.events.on('routeChangeComplete', handleRouteChange);
      // return () => {
      //   router.events.off('routeChangeComplete', handleRouteChange);
      // };
    } else {
      console.warn('Google Analytics 추적 ID가 설정되지 않았습니다.');
    }
  }, [router.events]);
  //!Section Google Analytics

  return (
    <QueryClientProvider client={queryClient}>
      <SpeedInsights />
      <Analytics />
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
