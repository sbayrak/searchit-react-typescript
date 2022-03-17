import React, { createContext, useReducer } from 'react';
import SearchReducer from './SearchReducer';

export type allObj = {
  title: string;
  link: string;
  description: string;
  cite: string;
};

export interface SInitialState {
  active: string;
  search: string;
  all: allObj[];
  switchActive: (
    payload: string
  ) => React.MouseEvent<HTMLButtonElement | MouseEvent> | void;
  setSearch: (payload: string) => React.ChangeEvent<HTMLInputElement> | void;
  getAllResult: (query: string) => void;
}

const initialState: SInitialState = {
  active: 'video',
  search: '',
  all: [],
  switchActive: () => {},
  setSearch: () => {},
  getAllResult: () => {},
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

  const getAllResult = async (query: string) => {
    const fetchData = await fetch(
      `https://google-search3.p.rapidapi.com/api/v1/search/q=${query}&num=100`,
      {
        method: 'GET',
        headers: {
          'x-user-agent': 'desktop',
          'x-proxy-location': 'EU',
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
          'x-rapidapi-key': `${process.env.REACT_APP_APIKEY}`,
        },
      }
    );

    const result = await fetchData.json();
    dispatch({ type: 'SET_ALL_RESULT', payload: result });
  };
  return (
    <SearchContext.Provider
      value={{
        active: state.active,
        search: state.search,
        all: state.all,
        switchActive,
        setSearch,
        getAllResult,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
