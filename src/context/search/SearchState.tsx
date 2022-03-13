import React, { createContext, useReducer } from 'react';
import SearchReducer from './SearchReducer';

export interface SInitialState {
  active: string;
  search: string;
  switchActive: (
    payload: string
  ) => React.MouseEvent<HTMLButtonElement | MouseEvent> | void;
  setSearch: (payload: string) => React.ChangeEvent<HTMLInputElement> | void;
}

const initialState: SInitialState = {
  active: 'all',
  search: '',
  switchActive: () => {},
  setSearch: () => {},
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

  const setSearch = (payload: string) => {
    dispatch({
      type: 'SET_SEARCH_INPUT',
      payload,
    });
  };
  return (
    <SearchContext.Provider
      value={{
        active: state.active,
        search: state.search,
        switchActive,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
