/* eslint-disable indent */
import { FC, useCallback, useEffect, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { ToDoItemModel, useToDo, View } from '@components/context/context';
import { ToDoItem } from '@components/common';
import styles from './ToDoItems.module.css';

const ToDoItems: FC = () => {
  const { toDoItems, view, clearToDoCompleted, sortToDoItem } = useToDo();
  const [state, setState] = useState<ToDoItemModel[]>([]);

  const handleToDoToShow = useCallback(
    (value: View) => {
      switch (value) {
        case 'all': {
          return setState([...toDoItems]);
        }

        case 'active': {
          return setState(toDoItems.filter((toDoItem: ToDoItemModel) => toDoItem.isDone === false));
        }

        case 'completed': {
          return setState(toDoItems.filter((toDoItem: ToDoItemModel) => toDoItem.isDone === true));
        }
      }
    },
    [toDoItems],
  );

  useEffect(() => {
    handleToDoToShow(view);
  }, [handleToDoToShow, view]);

  const showItemsLeft = toDoItems.filter((toDoItem: ToDoItemModel) => toDoItem.isDone === false)
    .length;

  return (
    <>
      <ReactSortable
        tag="ul"
        list={view === 'all' ? toDoItems : state}
        setList={view === 'all' ? sortToDoItem : setState}
        group="groupName"
        animation={300}
        delay={3}
        className={`${styles.container} ${styles.scrollY} dark:bg-gray-800`}
      >
        {state.map((toDo: ToDoItemModel) => (
          <ToDoItem key={toDo.id} toDo={toDo} />
        ))}
      </ReactSortable>

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

export default ToDoItems;
