import { CheckIcon, CrossIcon } from '@components/icons';

const ToDoList = (): JSX.Element => {
  return (
    <>
      <ul className="bg-white w-full mt-4 rounded-t">
        <li className="p-4 border-b">
          <div className="flex">
            <button
              type="button"
              className="flex justify-center items-center max-w-2xs w-full h-6 mr-2 text-gray-300 text-center border border-gray-300 border-solid rounded-full hover:outline-none focus:outline-none"
            >
              <CheckIcon />
            </button>

            <p className="flex-1">Jog around the park 3x</p>

            <button
              type="button"
              className="max-w-2xs w-full ml-2 text-gray-300 text-center rounded-full hover:outline-none focus:outline-none"
            >
              <CrossIcon />
            </button>
          </div>
        </li>

        <li className="p-4 border-b">
          <div className="flex">
            <button
              type="button"
              className="flex justify-center items-center max-w-2xs w-full h-6 mr-2 text-gray-300 text-center border border-gray-300 border-solid rounded-full hover:outline-none focus:outline-none"
            >
              <CheckIcon />
            </button>

            <p className="flex-1">Jog around the park 3x</p>

            <button
              type="button"
              className="max-w-2xs w-full ml-2 text-gray-300 text-center rounded-full hover:outline-none focus:outline-none"
            >
              <CrossIcon />
            </button>
          </div>
        </li>
      </ul>

      <div className="flex justify-between bg-white w-full p-4 text-gray-400 rounded-b shadow">
        <p>5 items left</p>
        <p>clear completed</p>
      </div>
    </>
  );
};

export default ToDoList;
