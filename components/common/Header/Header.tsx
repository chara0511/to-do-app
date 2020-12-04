import Image from 'next/image';
import { SunIcon } from '@components/icons';

const Header = (): JSX.Element => {
  return (
    <header className="relative">
      <Image src="/bg-mobile-light.jpg" alt="Background mobile" width={375} height={200} />

      <div className="absolute flex justify-between top-0 w-full px-6 py-10">
        <h1 className="text-white text-3xl uppercase font-bold tracking-widest2x">todo</h1>

        <button type="button">
          <span>
            <SunIcon className="hover:fill-current" />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
