import { FC, useMemo } from 'react';
import { Input } from '@components/ui';
import { CheckIcon } from '@components/icons';

interface Props {
  id?: string;
}

const Searchbar: FC<Props> = ({ id = 'search' }) => {
  return useMemo(
    () => (
      <div className="flex bg-white p-3 rounded text-gray-300 focus-within:text-gray-600">
        <label className="hidden" htmlFor={id}>
          search
        </label>

        <button
          type="button"
          className="max-w-2xs w-full h-6 mr-2 border text-center cursor-default border-gray-300 border-solid rounded-full hover:outline-none focus:outline-none"
        >
          <span>
            <CheckIcon className="invisible" />
          </span>
        </button>

        <Input
          id={id}
          className="w-full bg-transparent placeholder-gray-400 hover:outline-none focus:outline-none"
        />
      </div>
    ),
    [],
  );
};

export default Searchbar;
