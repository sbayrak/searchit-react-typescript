import React, { useContext } from 'react';
import { SearchContext } from '../../context/search/SearchState';
import SearchInput from '../layout/SearchInput';
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
        <SearchInput />
        {/* Skeletonlar bunun icine renderlanmalı */}
        <div className='search-all'>
          <a href='/'>
            <span>https://suatbayrak.com &gt; suat-bayrak</span>
            <h4 className='title'>Suat Bayrak | Web Developer</h4>
            <p className='description'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est
              harum officia dolorem voluptates dicta accusantium ipsa cum
              numquam expedita!
            </p>
          </a>
        </div>{' '}
        <div className='search-all'>
          <a href='/'>
            <span>https://suatbayrak.com &gt; suat-bayrak</span>
            <h4 className='title'>Suat Bayrak | Web Developer</h4>
            <p className='description'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est
              harum officia dolorem voluptates dicta accusantium ipsa cum
              numquam expedita!
            </p>
          </a>
        </div>
        <SkeletonComponent type='asd' bp='asd' />
      </div>
    </div>
  );
};

export default Search;
