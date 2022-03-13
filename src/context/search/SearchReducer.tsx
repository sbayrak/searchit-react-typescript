import React from 'react';
import { SInitialState } from './SearchState';

export type ACTIONTYPES = { type: 'SET_ACTIVE_CLASS'; payload: string };

function SearchReducer(state: SInitialState, action: ACTIONTYPES) {
  switch (action.type) {
    case 'SET_ACTIVE_CLASS':
      return {
        ...state,
        active: action.payload,
      };
  }
}

export default SearchReducer;
