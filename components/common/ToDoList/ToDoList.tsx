/* eslint-disable indent */
import { FC, useEffect } from 'react';
import { CheckIcon, CrossIcon } from '@components/icons';
import { ToDoItemModel, useToDo, View } from '@components/context/context';

const ToDoList: FC = (): JSX.Element => {
  const {
    toDoItems,
    toDoToShow,
    view,
    clearToDoCompleted,
    deleteToDo,
    toggleToDo,
    getToDoAll,
    getToDoActive,
    getToDoCompleted,
  } = useToDo();

  const handleToDoToShow = (value: View): any => {
    switch (value) {
      case 'all': {
        return getToDoAll();
      }

      case 'active': {
        return getToDoActive();
      }

      case 'completed': {
        return getToDoCompleted();
      }
    }
  };

  useEffect(() => {
    handleToDoToShow(view);
    return (): any => handleToDoToShow(view);
  }, [toDoItems, view]);

  const showItemsLeft = toDoItems.filter((toDoItem: ToDoItemModel) => toDoItem.isDone === false)
    .length;

  return (
    <ul className="bg-white dark:bg-gray-800 w-full mt-4 rounded">
      {toDoToShow.map((toDo: ToDoItemModel) => (
        <li key={toDo.id} className="p-4 border-b dark:border-gray-600 hover:shadow">
          <div
            className={`flex ${
              toDo.isDone
                ? 'line-through text-gray-300 dark:text-gray-600'
                : 'text-black dark:text-white'
            }`}
          >
            <button
              type="button"
              className={`${
                toDo.isDone
                  ? 'text-white bg-gradient-to-r from-lightskyblue to-mediumorchid'
                  : 'text-gray-300'
              } flex justify-center items-center max-w-2xs w-full h-6 mr-2 text-center border border-gray-300 border-solid rounded-full hover:outline-none focus:outline-none`}
              onClick={(): any => {
                toggleToDo(toDo.id);
              }}
            >
              <CheckIcon className={toDo.isDone ? 'stroke-2' : ''} />
            </button>

            <p className="flex-1">{toDo.task}</p>

            <button
              type="button"
              className="max-w-2xs w-full ml-2 text-gray-300 text-center rounded-full hover:outline-none focus:outline-none"
              onClick={(): any => deleteToDo(toDo.id)}
            >
              <CrossIcon />
            </button>
          </div>
        </li>
      ))}

      <li className="border-b dark:border-gray-600 flex justify-between mt-1 p-4 text-gray-400">
        <p>
          <span>{showItemsLeft}</span> items left
        </p>
        <button
          type="button"
          className="capitalize hover:outline-none focus:outline-none"
          onClick={(): any => clearToDoCompleted()}
        >
          clear completed
        </button>
      </li>
    </ul>
  );
};

export default ToDoList;
