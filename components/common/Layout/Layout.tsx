import { FC } from 'react';
import { Footer, Header } from '@components/common';
import { useToDo } from '@components/context/context';

const Layout: FC = ({ children }) => {
  const { darkMode } = useToDo();

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="font-body bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Header />

        <main className="relative -mt-24 max-w-xl mx-auto px-6">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
