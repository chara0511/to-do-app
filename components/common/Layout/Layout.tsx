import { FC } from 'react';
import Image from 'next/image';
import { Header } from '@components/common';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />

      <main className="relative -mt-24 px-6">{children}</main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Image src="/vercel.svg" alt="Vercel Logo" width={80} height={25} />
        </a>
      </footer>
    </>
  );
};

export default Layout;
