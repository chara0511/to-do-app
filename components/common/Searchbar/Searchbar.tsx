import { FC, useMemo } from 'react';
import { Input } from '@components/ui';
import { CheckIcon } from '@components/icons';
import styles from './Searchbar.module.css';

interface Props {
  id?: string;
}

const Searchbar: FC<Props> = ({ id = 'search' }) => {
  return useMemo(
    () => (
      <div className={`${styles.container} dark:bg-gray-800`}>
        <button type="button" aria-label="Check Button - disabled" className={styles.checkButton}>
          <span>
            <CheckIcon className="invisible" />
          </span>
        </button>

        <Input
          id={id}
          className="w-full bg-transparent text-black dark:text-white placeholder-gray-400 hover:outline-none focus:outline-none"
        />
      </div>
    ),
    [],
  );
};

export default Searchbar;
