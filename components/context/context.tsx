/* eslint-disable indent */
import { Context, createContext, FC, useContext, useMemo, useReducer } from 'react';

export interface ToDoItemModel {
  id: number;
  task: string;
  isDone: boolean;
}

export type View = 'all' | 'active' | 'completed';

interface ToDoState {
  darkMode: boolean;
  toDoItems: ToDoItemModel[];
  view: View;
}

const initialState: ToDoState = {
  darkMode: false,
  toDoItems: [],
  view: 'all',
};

type Action =
  | { type: 'ADD_TO_DO_ITEM'; payload: ToDoItemModel }
  | { type: 'CLEAR_TO_DO_COMPLETED' }
  | { type: 'DELETE_TO_DO_ITEM'; payload: number }
  | { type: 'SORT_TO_DO_ITEMS'; payload: ToDoItemModel[] }
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'TOGGLE_TO_DO_ITEM'; payload: number }
  | { type: 'TOGGLE_VIEW'; payload: View };

const toDoReducer = (state: ToDoState, action: Action): ToDoState => {
  switch (action.type) {
    case 'ADD_TO_DO_ITEM': {
      return {
        ...state,
        toDoItems: [action.payload, ...state.toDoItems],
      };
    }

    case 'CLEAR_TO_DO_COMPLETED': {
      return {
        ...state,
        toDoItems: state.toDoItems.filter((toDoItem) => toDoItem.isDone === false),
      };
    }

    case 'DELETE_TO_DO_ITEM': {
      return {
        ...state,
        toDoItems: state.toDoItems?.filter((toDoItem) => toDoItem.id !== action.payload),
      };
    }

    case 'SORT_TO_DO_ITEMS': {
      return {
        ...state,
        toDoItems: [...action.payload],
      };
    }

    case 'TOGGLE_DARK_MODE': {
      return {
        ...state,
        darkMode: !state.darkMode,
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

    case 'TOGGLE_VIEW': {
      return {
        ...state,
        view: action.payload,
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

  const addToDo = (toDo: string): any =>
    dispatch({
      type: 'ADD_TO_DO_ITEM',
      payload: { id: new Date().getTime(), task: toDo, isDone: false },
    });
  const clearToDoCompleted = (): any => dispatch({ type: 'CLEAR_TO_DO_COMPLETED' });
  const deleteToDo = (id: number): void => dispatch({ type: 'DELETE_TO_DO_ITEM', payload: id });
  const sortToDoItems = (sortToDoItems: ToDoItemModel[]): any =>
    dispatch({ type: 'SORT_TO_DO_ITEMS', payload: sortToDoItems });
  const toggleDarkMode = (): any => dispatch({ type: 'TOGGLE_DARK_MODE' });
  const toggleToDo = (id: number): any => dispatch({ type: 'TOGGLE_TO_DO_ITEM', payload: id });
  const toggleView = (view: View): any => dispatch({ type: 'TOGGLE_VIEW', payload: view });

  const value = useMemo(
    () => ({
      ...state,
      addToDo,
      clearToDoCompleted,
      deleteToDo,
      sortToDoItems,
      toggleDarkMode,
      toggleToDo,
      toggleView,
    }),
    [state],
  );

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
