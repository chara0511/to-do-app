/* eslint-disable indent */
import { FC, useEffect } from 'react';
import { CheckIcon, CrossIcon } from '@components/icons';
import { ToDoItemModel, useToDo, View } from '@components/context/context';
import styles from './ToDoList.module.css';

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
    <>
      <ul className={`${styles.container} ${styles.scrollY} dark:bg-gray-800`}>
        {toDoToShow.map((toDo: ToDoItemModel) => (
          <li key={toDo.id} className={`${styles.toDoItemContainer} dark:border-gray-600`}>
            <div
              className={`flex items-center ${
                toDo.isDone
                  ? 'line-through text-gray-300 dark:text-gray-600'
                  : 'text-black dark:text-white'
              }`}
            >
              <button
                type="button"
                className={`${styles.checkButton} ${
                  toDo.isDone
                    ? 'text-white bg-gradient-to-r from-lightskyblue to-mediumorchid'
                    : 'text-gray-300'
                }`}
                onClick={(): any => {
                  toggleToDo(toDo.id);
                }}
              >
                <CheckIcon className={toDo.isDone ? 'stroke-2' : ''} />
              </button>

              <p className="flex-1">{toDo.task}</p>

              <button
                type="button"
                className={styles.deleteButton}
                onClick={(): any => deleteToDo(toDo.id)}
              >
                <CrossIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className={`${styles.toDoItemFooter} dark:bg-gray-800 border-b dark:border-gray-600`}>
        <p>
          <span>{showItemsLeft}</span> items left
        </p>
        <button
          type="button"
          className={styles.clearButton}
          onClick={(): any => clearToDoCompleted()}
        >
          clear completed
        </button>
      </div>
    </>
  );
};

export default ToDoList;
