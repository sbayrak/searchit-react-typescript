import React, { createContext, useReducer } from 'react';
import PaginationReducer from './PaginationReducer';

export interface IInitialState {
  page: number;
  itemsPerPage: number;
  changePage: (page: number) => void;
}

const initialState: IInitialState = {
  page: 0,
  itemsPerPage: 10,
  changePage: () => {},
};

interface Props {
  children: React.ReactNode;
}

export const PaginationContext = createContext<IInitialState>(initialState);

function PaginationState({ children }: Props) {
  const [state, dispatch] = useReducer(PaginationReducer, initialState);

  const changePage = (page: number) => {
    dispatch({
      type: 'SET_PAGE_NUMBER',
      payload: page,
    });
  };

  return (
    <PaginationContext.Provider
      value={{
        page: state.page,
        itemsPerPage: state.itemsPerPage,
        changePage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export default PaginationState;
