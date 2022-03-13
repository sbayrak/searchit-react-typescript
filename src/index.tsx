import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './styles/index.scss';
import SearchState from './context/search/SearchState';

ReactDOM.render(
  <SearchState>
    <App />
  </SearchState>,
  document.getElementById('root')
);
