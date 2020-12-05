import { FC } from 'react';
import { Footer, Header } from '@components/common';

const Layout: FC = ({ children }) => {
  console.log({ children });
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="relative -mt-24 px-6">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
