import { FC } from 'react';
import type { AppProps } from 'next/app';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ToDoContextProvider } from '@components/context';
import { Head } from '@components/common';
import '../styles/globals.css';

const Noop: FC = ({ children }) => <>{children}</>;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head />

      <ToDoContextProvider>
        <DndProvider backend={HTML5Backend}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DndProvider>
      </ToDoContextProvider>
    </>
  );
};

export default MyApp;
