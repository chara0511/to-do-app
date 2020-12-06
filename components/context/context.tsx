/* eslint-disable indent */
import { Context, createContext, FC, useContext, useMemo, useReducer } from 'react';

export interface ToDoItemModel {
  id: number;
  task: string;
  isDone: boolean;
}

interface ToDoState {
  toDoItems: ToDoItemModel[];
}

const initialState: ToDoState = {
  toDoItems: [],
};

type Action =
  | { type: 'ADD_TO_DO_ITEM'; payload: ToDoItemModel }
  | { type: 'DELETE_TO_DO_ITEM'; payload: number }
  | { type: 'TOGGLE_TO_DO_ITEM'; payload: number };

const toDoReducer = (state: ToDoState, action: Action): ToDoState => {
  switch (action.type) {
    case 'ADD_TO_DO_ITEM': {
      return {
        ...state,
        toDoItems: [action.payload, ...state.toDoItems],
      };
    }

    case 'DELETE_TO_DO_ITEM': {
      return {
        ...state,
        toDoItems: state.toDoItems.filter((toDoItem) => toDoItem.id !== action.payload),
      };
    }

    case 'TOGGLE_TO_DO_ITEM': {
      return {
        ...state,
        toDoItems: state.toDoItems.map((toDoItem) =>
          toDoItem.id === action.payload ? { ...toDoItem, isDone: !toDoItem.isDone } : toDoItem,
        ),
      };
    }

    default: {
      return state;
    }
  }
};

const ToDoContext: Context<ToDoState | any> = createContext(initialState);

const ToDoProvider: FC = (props) => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  const addToDo = (toDo: string): void =>
    dispatch({
      type: 'ADD_TO_DO_ITEM',
      payload: { id: new Date().getTime(), task: toDo, isDone: false },
    });
  const deleteToDo = (id: number): void => dispatch({ type: 'DELETE_TO_DO_ITEM', payload: id });
  const toggleToDo = (id: number): void => dispatch({ type: 'TOGGLE_TO_DO_ITEM', payload: id });

  const value = useMemo(() => ({ ...state, addToDo, deleteToDo, toggleToDo }), [state]);

  return <ToDoContext.Provider value={value} {...props} />;
};

export const useToDo = (): any => {
  const context = useContext(ToDoContext);

  if (context === undefined) {
    throw new Error('useToDo must be used within a ToDoProvider');
  }

  return context;
};

const ToDoContextProvider: FC = ({ children }) => <ToDoProvider>{children}</ToDoProvider>;

export default ToDoContextProvider;
