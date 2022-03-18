import React, { createContext, useReducer } from 'react';
import SearchReducer from './SearchReducer';

export type allObj = {
  title: string;
  link: string;
  description: string;
  cite: string;
};

export type newsObj = {
  title: string;
  links: [];
  source: {
    href: string;
  };
};

export interface SInitialState {
  active: string;
  search: string;
  all: allObj[];
  news: newsObj[];
  switchActive: (
    payload: string
  ) => React.MouseEvent<HTMLButtonElement | MouseEvent> | void;
  setSearch: (payload: string) => React.ChangeEvent<HTMLInputElement> | void;
  getAllResult: (query: string | null) => void;
  getNewsResult: (query: string | null) => void;
}

const initialState: SInitialState = {
  active: 'all',
  search: '',
  all: [],
  news: [],
  switchActive: () => {},
  setSearch: () => {},
  getAllResult: () => {},
  getNewsResult: () => {},
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

  const getAllResult = async (query: string | null) => {
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
    dispatch({ type: 'SET_ALL_RESULT', payload: result.results });
  };

  const getNewsResult = async (query: string | null) => {
    const fetchData = await fetch(
      `https://google-search3.p.rapidapi.com/api/v1/news/q=${query}`,
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
    dispatch({ type: 'SET_NEWS_RESULT', payload: result.entries });
  };
  return (
    <SearchContext.Provider
      value={{
        active: state.active,
        search: state.search,
        all: state.all,
        news: state.news,
        switchActive,
        setSearch,
        getAllResult,
        getNewsResult,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
