import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { SearchContext } from '../../context/search/SearchState';
import SearchInput from '../layout/SearchInput';
import SkeletonComponent from '../layout/SkeletonComponent';

const Search = () => {
  const searchContext = useContext(SearchContext);
  const searchAll = (
    <div className='search-all'>
      <a href='/'>
        <span>https://suatbayrak.com &gt; suat-bayrak</span>
        <h4 className='title'>Suat Bayrak | Web Developer</h4>
        <p className='description'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est
          harum officia dolorem voluptates dicta accusantium ipsa cum numquam
          expedita!
        </p>
      </a>
    </div>
  );
  const searchNews = (
    <div className='search-news'>
      <a href='/'>
        <p className='description'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est
          harum officia dolorem voluptates dicta accusantium ipsa cum numquam
          expedita!
        </p>
        <span>https://suatbayrak.com &gt; suat-bayrak</span>
      </a>
    </div>
  );

  const searchImage = (
    <div className='search-image'>
      <a href='/'>
        <img src='/img1.jpg' alt='asd' loading='lazy' />
        <p className='description search-image-p'>
          Model X | テスラ ジャパン www.tesla.com
        </p>
      </a>
    </div>
  );

  const searchVideo = (
    <div className='search-video'>
      <ReactPlayer
        url={
          'https://www.youtube.com/watch?v=GDa8kZLNhJ4&t=28157s&ab_channel=JavaScriptMastery'
        }
        muted={true}
        width='100%'
        height='100%'
      />
    </div>
  );
  return (
    <div className='search-container'>
      <div className={`search-wrapper`}>
        <SearchInput />
        {/* Skeletonlar bunun icine renderlanmalı */}
        <div className={`search-${searchContext.active}-container`}></div>

        <SkeletonComponent type='asd' bp='asd' />
      </div>
    </div>
  );
};

export default Search;
