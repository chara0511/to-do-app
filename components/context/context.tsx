/* eslint-disable indent */
import { Context, createContext, FC, useContext, useMemo, useReducer } from 'react';

export interface ToDoItemModel {
  id: number;
  task: string;
  isDone: boolean;
}

export type View = 'all' | 'active' | 'completed';

interface ToDoState {
  toDoItems: ToDoItemModel[];
  toDoToShow: ToDoItemModel[];
  view: View;
}

const initialState: ToDoState = {
  toDoItems: [],
  toDoToShow: [],
  view: 'all',
};

type Action =
  | { type: 'ADD_TO_DO_ITEM'; payload: ToDoItemModel }
  | { type: 'DELETE_TO_DO_ITEM'; payload: number }
  | { type: 'GET_TO_DO_ACTIVE' }
  | { type: 'GET_TO_DO_ALL' }
  | { type: 'GET_TO_DO_COMPLETED' }
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

    case 'DELETE_TO_DO_ITEM': {
      return {
        ...state,
        toDoItems: state.toDoItems.filter((toDoItem) => toDoItem.id !== action.payload),
      };
    }

    case 'GET_TO_DO_ACTIVE': {
      return {
        ...state,
        toDoToShow: state.toDoItems.filter((toDoItem) => toDoItem.isDone === false),
      };
    }

    case 'GET_TO_DO_ALL': {
      return {
        ...state,
        toDoToShow: [...state.toDoItems],
      };
    }

    case 'GET_TO_DO_COMPLETED': {
      return {
        ...state,
        toDoToShow: state.toDoItems.filter((toDoItem) => toDoItem.isDone === true),
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
  const deleteToDo = (id: number): any => dispatch({ type: 'DELETE_TO_DO_ITEM', payload: id });
  const getToDoActive = (): any => dispatch({ type: 'GET_TO_DO_ACTIVE' });
  const getToDoAll = (): any => dispatch({ type: 'GET_TO_DO_ALL' });
  const getToDoCompleted = (): any => dispatch({ type: 'GET_TO_DO_COMPLETED' });
  const toggleToDo = (id: number): any => dispatch({ type: 'TOGGLE_TO_DO_ITEM', payload: id });
  const toggleView = (view: View): any => dispatch({ type: 'TOGGLE_VIEW', payload: view });

  const value = useMemo(
    () => ({
      ...state,
      addToDo,
      deleteToDo,
      getToDoActive,
      getToDoAll,
      getToDoCompleted,
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
