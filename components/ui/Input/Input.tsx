import { FC, InputHTMLAttributes, KeyboardEvent } from 'react';
import { useToDo } from '@components/context/context';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
}

const Input: FC<Props> = (props) => {
  const { addToDo } = useToDo();

  const { className, id, ...rest } = props;

  return (
    <input
      id={id}
      type="text"
      placeholder="Create a new to do..."
      className={className}
      onKeyUp={(e: KeyboardEvent<HTMLInputElement>): any => {
        e.preventDefault();

        if (e.key === 'Enter' && e.currentTarget.value !== '') {
          addToDo(e.currentTarget.value);
          // dispatch => getValueSearch(e.currentTarget.value);
          //const q = e.currentTarget.value;
          // router.push({ pathname: '/demo', query: q ? { q } : {} }, undefined, {
          //   shallow: true,
          // });
        }
      }}
      {...rest}
    />
  );
};

export default Input;
