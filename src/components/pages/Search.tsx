import React, { useContext } from 'react';
import { SearchContext } from '../../context/search/SearchState';
import SkeletonComponent from '../layout/SkeletonComponent';

const Search = () => {
  const searchContext = useContext(SearchContext);
  const spinner = (
    <div className='spinner-grow text-primary' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  );
  return (
    <div className='search-container'>
      <div className='search-wrapper'>
        {/* Skeletonlar bunun icine renderlanmalı */}
        <SkeletonComponent type='asd' bp='asd' />
      </div>
    </div>
  );
};

export default Search;
