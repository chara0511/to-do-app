import { MoonIcon, SunIcon } from '@components/icons';
import { useToDo } from '@components/context/context';
import styles from './Header.module.css';

const Header = (): JSX.Element => {
  const { darkMode, toggleDarkMode } = useToDo();

  return (
    <header className="relative">
      <img
        className="w-full h-48 md:hidden"
        alt="background"
        src={darkMode ? '/bg-mobile-dark.jpg' : '/bg-mobile-light.jpg'}
      />

      <img
        className="w-full h-72 hidden md:block"
        alt="background"
        src={darkMode ? '/bg-desktop-dark.jpg' : '/bg-desktop-light.jpg'}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>todo</h1>

        <button
          type="button"
          aria-label="Toggle Button"
          onClick={(): any => toggleDarkMode()}
          className={`${styles.toggleButton} ${
            darkMode ? 'hover:text-yellow-300' : 'hover:text-blue-300'
          }`}
        >
          <span>{darkMode ? <SunIcon /> : <MoonIcon />}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
