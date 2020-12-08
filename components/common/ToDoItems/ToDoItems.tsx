/* eslint-disable indent */
import { FC, useCallback, useEffect, useState } from 'react';
import update from 'immutability-helper';
import { ToDoItem } from '@components/common';
import { ToDoItemModel, useToDo, View } from '@components/context/context';
import styles from './ToDoItems.module.css';

const ToDoItems: FC = () => {
  const { toDoItems, view, clearToDoCompleted } = useToDo();

  const [cards, setCards] = useState(toDoItems);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      );
    },
    [cards],
  );

  const handleToDoToShow = (value: View): void => {
    switch (value) {
      case 'all': {
        return setCards([...toDoItems]);
      }

      case 'active': {
        return setCards(toDoItems.filter((toDoItem: ToDoItemModel) => toDoItem.isDone === false));
      }

      case 'completed': {
        return setCards(toDoItems.filter((toDoItem: ToDoItemModel) => toDoItem.isDone === true));
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
        {cards.map((toDo: ToDoItemModel, index: number) => (
          <ToDoItem key={toDo.id} index={index} toDo={toDo} moveCard={moveCard} />
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

export default ToDoItems;
