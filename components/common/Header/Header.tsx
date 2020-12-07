import Image from 'next/image';
import { MoonIcon, SunIcon } from '@components/icons';
import { useToDo } from '@components/context/context';

const Header = (): JSX.Element => {
  const { darkMode, toggleDarkMode } = useToDo();

  return (
    <header className="relative">
      <Image
        src={darkMode ? '/bg-mobile-dark.jpg' : '/bg-mobile-light.jpg'}
        alt="Background mobile"
        width={375}
        height={200}
      />

      <div className="absolute flex justify-between top-0 w-full px-6 py-10">
        <h1 className="text-white text-3xl uppercase font-bold tracking-widest2x">todo</h1>

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
