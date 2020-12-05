import { FC } from 'react';
import { Footer, Header } from '@components/common';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />

      <main className="relative -mt-24 px-6">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
