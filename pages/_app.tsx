import { Head } from '@components/common';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
