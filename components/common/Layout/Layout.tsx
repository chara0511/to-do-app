import { FC } from 'react';
import Image from 'next/image';

const Layout: FC = ({ children }) => {
  return (
    <>
      <header>
        <Image src="/bg-mobile-light.jpg" alt="Background mobile" width={375} height={200} />

        <h1>to do</h1>

        <button>Dark demo</button>
      </header>
      <main>{children}</main>
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
