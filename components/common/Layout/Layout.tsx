import { FC } from 'react';
import { Footer, Header } from '@components/common';
import { useToDo } from '@components/context/context';
import styles from './Layout.module.css';

const Layout: FC = ({ children }) => {
  const { darkMode } = useToDo();

  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <div className={`${styles.container} dark:bg-gray-900`}>
        <Header />

        <main className="relative -mt-24 max-w-xl mx-auto px-6">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
