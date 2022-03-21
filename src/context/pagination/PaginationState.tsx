import React, { createContext, useReducer } from 'react';
import PaginationReducer from './PaginationReducer';

export interface IInitialState {
  page: number;
}

const initialState: IInitialState = {
  page: 0,
};

interface Props {
  children: React.ReactNode;
}

export const PaginationContext = createContext<IInitialState>(initialState);

function PaginationState({ children }: Props) {
  const [state, dispatch] = useReducer(PaginationReducer, initialState);

  return (
    <PaginationContext.Provider
      value={{
        page: state.page,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export default PaginationState;
