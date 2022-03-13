import React, { createContext, useReducer } from 'react';
import SearchReducer from './SearchReducer';

export interface SInitialState {
  active: string;
  switchActive: (
    payload: string
  ) => React.MouseEvent<HTMLButtonElement | MouseEvent> | void;
}

const initialState: SInitialState = {
  active: 'all',
  switchActive: () => {},
};

interface Props {
  children: React.ReactNode;
}

export const SearchContext = createContext<SInitialState>(initialState);

const SearchState = ({ children }: Props) => {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const switchActive = (payload: string) => {
    dispatch({
      type: 'SET_ACTIVE_CLASS',
      payload,
    });
  };
  return (
    <SearchContext.Provider
      value={{
        active: state.active,
        switchActive,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
