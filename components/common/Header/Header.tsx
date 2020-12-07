import { MoonIcon, SunIcon } from '@components/icons';
import { useToDo } from '@components/context/context';

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

      <div className="absolute flex justify-between top-0 left-0 right-0 mx-auto max-w-xl w-full px-6 pt-10 md:pt-20">
        <h1 className="text-white text-3xl lg:text-4xl uppercase font-bold tracking-widest2x">
          todo
        </h1>

        <button
          type="button"
          onClick={(): any => toggleDarkMode()}
          className={`text-white  hover:outline-none focus:outline-none ${
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
