import React from 'react';
import { IInitialState } from './PaginationState';

export type ACTIONTYPES = { type: 'SET_PAGE_NUMBER'; payload: number };

function PaginationReducer(state: IInitialState, action: ACTIONTYPES) {
  switch (action.type) {
    case 'SET_PAGE_NUMBER':
      return {
        ...state,
        page: action.payload,
      };
  }
}

export default PaginationReducer;
