/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable indent */
import { createContext, FC, useMemo, useReducer } from 'react';

interface State {
  id: number;
  task: string;
  isDone: boolean;
  toDoItems: any[];
}
const initialState = {
  id: 0,
  task: '',
  isDone: false,
  toDoItems: [],
};

type Action =
  | { type: 'ADD_TO_DO_ITEM'; payload: any }
  | { type: 'TOGGLE_TO_DO_ITEM' | { type: 'DELETE_TO_DO_ITEM' } };

const toDoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_TO_DO_ITEM': {
      return {
        ...state,
        toDoItems: [action.payload, ...state.toDoItems],
      };
    }

    default: {
      return state;
    }
  }
};

const ToDoContext = createContext<State>(initialState);

const ToDoProvider: FC = (props) => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  const addToDo = (toDo: State) => dispatch({ type: 'ADD_TO_DO_ITEM', payload: toDo });

  const value = useMemo(() => ({ ...state, addToDo }), [state]);

  return <ToDoContext.Provider value={value} {...props} />;
};

const ToDoContextProvider: FC = ({ children }) => <ToDoProvider>{children}</ToDoProvider>;

export default ToDoContextProvider;
