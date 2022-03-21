import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './styles/index.scss';
import SearchState from './context/search/SearchState';
import PaginationState from './context/pagination/PaginationState';

ReactDOM.render(
  <SearchState>
    <PaginationState>
      <App />
    </PaginationState>
  </SearchState>,
  document.getElementById('root')
);
