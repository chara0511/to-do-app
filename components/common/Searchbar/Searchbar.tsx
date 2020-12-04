import { useRouter } from 'next/router';
import { FC, KeyboardEvent, useMemo } from 'react';

interface Props {
  id?: string;
}

const Searchbar: FC<Props> = ({ id = 'search' }) => {
  const router = useRouter();

  return useMemo(
    () => (
      <div>
        <label htmlFor={id}>search</label>
        <input
          id={id}
          type="text"
          placeholder="Create a new to do..."
          onKeyUp={(e: KeyboardEvent<HTMLInputElement>): void => {
            e.preventDefault();

            if (e.key === 'Enter') {
              const q = e.currentTarget.value;

              router.push({ pathname: '/demo', query: q ? { q } : {} }, undefined, {
                shallow: true,
              });
            }
          }}
        />
      </div>
    ),
    [],
  );
};

export default Searchbar;
