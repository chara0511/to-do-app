import { FC } from 'react';
import type { AppProps } from 'next/app';
import { Head } from '@components/common';
import { ToDoContextProvider } from '@components/context';
import '../styles/globals.css';

const Noop: FC = ({ children }) => <>{children}</>;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head />

      <ToDoContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToDoContextProvider>
    </>
  );
};

export default MyApp;
