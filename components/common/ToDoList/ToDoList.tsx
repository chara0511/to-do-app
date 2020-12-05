import { CheckIcon, CrossIcon } from '@components/icons';
import { FC } from 'react';

const ToDoList: FC = (): JSX.Element => {
  const todos: string[] = [
    'Jog around the park 3x',
    '10 minutes meditation',
    'read for 1 hour',
    'pick up groceries',
    'complete todo app on frontend mentor',
  ];

  return (
    <ul className="bg-white w-full mt-4 rounded-t">
      {todos.map((todo, i) => (
        <li key={i} className="p-4 border-b hover:shadow">
          <div className="flex">
            <button
              type="button"
              className="flex justify-center items-center max-w-2xs w-full h-6 mr-2 text-gray-300 text-center border border-gray-300 border-solid rounded-full hover:outline-none focus:outline-none"
            >
              <CheckIcon />
            </button>

            <p className="flex-1">{todo}</p>

            <button
              type="button"
              className="max-w-2xs w-full ml-2 text-gray-300 text-center rounded-full hover:outline-none focus:outline-none"
            >
              <CrossIcon />
            </button>
          </div>
        </li>
      ))}

      <li className="border-b flex justify-between mt-1 p-4 text-gray-400">
        <p>5 items left</p>
        <p>clear completed</p>
      </li>
    </ul>
  );
};

export default ToDoList;
