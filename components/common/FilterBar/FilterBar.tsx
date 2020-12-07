import { FC } from 'react';
import { useToDo } from '@components/context/context';

const FilterBar: FC = (): JSX.Element => {
  const { view, toggleView } = useToDo();

  const FILTER = Object.entries({ all: 'all', active: 'active', completed: 'completed' });

  return (
    <div className="my-4 p-4 bg-white dark:bg-gray-800 w-full rounded shadow text-center">
      {FILTER.map(([key, text]) => (
        <button
          key={key}
          className={`mx-2 px-1 capitalize ${
            view === text
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-lightskyblue to-mediumorchid'
              : 'text-gray-400'
          } font-semibold hover:outline-none focus:outline-none`}
          type="button"
          onClick={(): any => toggleView(text)}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
