import { FC, InputHTMLAttributes, KeyboardEvent } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
}

const Input: FC<Props> = (props) => {
  const { className, id, ...rest } = props;

  return (
    <input
      id={id}
      type="text"
      placeholder="Create a new to do..."
      className={className}
      onKeyUp={(e: KeyboardEvent<HTMLInputElement>): void => {
        e.preventDefault();

        if (e.key === 'Enter') {
          console.log(e.currentTarget.value);
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
