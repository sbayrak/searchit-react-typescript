import { allObj, imgResultObj, newsObj, SInitialState } from './SearchState';

export type ACTIONTYPES =
  | { type: 'SET_ACTIVE_CLASS'; payload: string }
  | { type: 'SET_SEARCH_INPUT'; payload: string }
  | { type: 'SET_ALL_RESULT'; payload: allObj[] }
  | { type: 'SET_NEWS_RESULT'; payload: newsObj[] }
  | { type: 'SET_IMAGE_RESULTS'; payload: imgResultObj[] };

function SearchReducer(state: SInitialState, action: ACTIONTYPES) {
  switch (action.type) {
    case 'SET_ACTIVE_CLASS':
      return {
        ...state,
        active: action.payload,
      };
    case 'SET_SEARCH_INPUT':
      return {
        ...state,
        search: action.payload,
      };
    case 'SET_ALL_RESULT':
      return {
        ...state,
        all: action.payload,
      };
    case 'SET_NEWS_RESULT':
      return {
        ...state,
        news: action.payload,
      };
    case 'SET_IMAGE_RESULTS':
      return {
        ...state,
        image: action.payload,
      };
  }
}

export default SearchReducer;
