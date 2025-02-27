import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { RootLayout } from 'src/layouts';
import { queryClient } from 'src/libs/react-query';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React, { ReactElement, ReactNode } from 'react';

// 타입 정의
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  // 타입 단언으로 Component를 JSX 요소로 처리할 수 있게 함
  const getLayout = Component.getLayout ?? ((page) => page);
  const ComponentWithProps = () => <Component {...pageProps} />;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>{getLayout(<ComponentWithProps />)}</RootLayout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
