import { FC, useRef } from 'react';
import { ToDoItemModel, useToDo } from '@components/context/context';
import { CheckIcon, CrossIcon } from '@components/icons';
import styles from './ToDoItem.module.css';

interface ToDoItemProps {
  toDo: ToDoItemModel;
}

const ToDoItem: FC<ToDoItemProps> = ({ toDo }) => {
  const { toggleToDo, deleteToDo } = useToDo();

  const ref = useRef<HTMLLIElement>(null);

  return (
    <li ref={ref} className={`${styles.container} dark:border-gray-600`}>
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
          onClick={(): any => toggleToDo(toDo.id)}
        >
          <CheckIcon className={toDo.isDone ? 'stroke-2' : ''} />
        </button>

        <p className="flex-1">{toDo.task}</p>

        <button
          type="button"
          aria-label="Delete To Do Item Button"
          className={styles.deleteButton}
          onClick={(): any => {
            deleteToDo(toDo.id);
          }}
        >
          <CrossIcon />
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
