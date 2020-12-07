import { FC } from 'react';
import { useToDo } from '@components/context/context';
import styles from './FilterBar.module.css';

const FilterBar: FC = (): JSX.Element => {
  const { view, toggleView } = useToDo();

  const FILTER = Object.entries({ all: 'all', active: 'active', completed: 'completed' });

  return (
    <div className={`${styles.container} dark:bg-gray-800`}>
      {FILTER.map(([key, text]) => (
        <button
          key={key}
          className={`${styles.filterButton} ${
            view === text ? `${styles.active}` : 'text-gray-400'
          }`}
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
