import { FC, useRef } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { ToDoItemTypes } from './ToDoItemTypes';
import { XYCoord } from 'dnd-core';
import { ToDoItemModel, useToDo } from '@components/context/context';
import { CheckIcon, CrossIcon } from '@components/icons';
import styles from './ToDoItem.module.css';

interface ToDoItemProps {
  index: number;
  toDo: ToDoItemModel;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const ToDoItem: FC<ToDoItemProps> = ({ index, toDo, moveCard }) => {
  const { deleteToDo, toggleToDo } = useToDo();

  const ref = useRef<HTMLLIElement>(null);

  const [, drop] = useDrop({
    accept: ToDoItemTypes.ToDoItem,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const { id } = toDo;

  const [{ isDragging }, drag] = useDrag({
    item: { type: ToDoItemTypes.ToDoItem, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <li ref={ref} className={`${styles.container} dark:border-gray-600`} style={{ opacity }}>
      <div
        className={`flex items-center ${
          toDo.isDone
            ? 'line-through text-gray-300 dark:text-gray-600'
            : 'text-black dark:text-white'
        }`}
      >
        <button
          type="button"
          aria-label="Check To Do Button"
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
          aria-label="Delete To Do Item Button"
          className={styles.deleteButton}
          onClick={(): any => deleteToDo(toDo.id)}
        >
          <CrossIcon />
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
