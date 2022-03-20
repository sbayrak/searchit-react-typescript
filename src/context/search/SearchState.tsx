import React, { createContext, useReducer } from 'react';
import SearchReducer, { ACTIONTYPES } from './SearchReducer';

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

export type imgResultObj = {
  image: {
    src: string;
  };
  link: {
    href: string;
    title: string;
  };
};

export interface SInitialState {
  active: string;
  search: string;
  all: allObj[];
  news: newsObj[];
  image: imgResultObj[];
  switchActive: (
    payload: string
  ) => React.MouseEvent<HTMLButtonElement | MouseEvent> | void;
  setSearch: (payload: string) => React.ChangeEvent<HTMLInputElement> | void;
  getAllResult: (query: string | null) => void;
  getNewsResult: (query: string | null) => void;

  getImageResults: (query: string | null) => void;
}

const initialState: SInitialState = {
  active: 'image',
  search: '',
  all: [],
  news: [],
  image: [],
  switchActive: () => {},
  setSearch: () => {},
  getAllResult: () => {},
  getNewsResult: () => {},
  getImageResults: () => {},
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

  const getImageResults = async (query: string | null) => {
    const fetchData = await fetch(
      `https://google-search3.p.rapidapi.com/api/v1/images/q=${query}`,
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
    dispatch({ type: 'SET_IMAGE_RESULTS', payload: result.image_results });
  };

  return (
    <SearchContext.Provider
      value={{
        active: state.active,
        search: state.search,
        all: state.all,
        news: state.news,
        image: state.image,
        switchActive,
        setSearch,
        getAllResult,
        getNewsResult,
        getImageResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
