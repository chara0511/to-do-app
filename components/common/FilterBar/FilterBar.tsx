import { FC } from 'react';

const FilterBar: FC = (): JSX.Element => {
  return (
    <div className="my-4 p-4 bg-white w-full rounded shadow text-center">
      <button className="mx-2 px-1" type="button">
        All
      </button>
      <button className="mx-2 px-1" type="button">
        Active
      </button>
      <button className="mx-2 px-1" type="button">
        Completed
      </button>
    </div>
  );
};

export default FilterBar;
