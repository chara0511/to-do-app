import { FC } from 'react';
import type { AppProps } from 'next/app';
import { Head } from '@components/common';
import '../styles/globals.css';
import { ToDoContextProvider } from 'context';

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
