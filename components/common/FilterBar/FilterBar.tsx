import { FC } from 'react';

const FilterBar: FC = (): JSX.Element => {
  const FILTER = Object.entries({ all: 'All', active: 'Active', completed: 'Completed' });

  return (
    <div className="my-4 p-4 bg-white w-full rounded shadow text-center">
      {FILTER.map(([key, text]) => (
        <button key={key} className="mx-2 px-1" type="button">
          {text}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
