import React, { useContext, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { PaginationContext } from '../../context/pagination/PaginationState';
import { SearchContext } from '../../context/search/SearchState';
import Pagination from '../layout/Pagination';
import SearchInput from '../layout/SearchInput';
import SkeletonComponent from '../layout/SkeletonComponent';

const Search = () => {
  const searchContext = useContext(SearchContext);
  const paginationContext = useContext(PaginationContext);
  const location = useLocation();
  const [urlSearchParams] = useSearchParams();

  useEffect(() => {
    let query = location.search.split('=');
    let searchQuery = query[1].split('&');

    if (searchContext.active === 'all')
      searchContext.getAllResult(searchQuery[0]);
    else if (searchContext.active === 'news')
      searchContext.getNewsResult(searchQuery[0]);
    else if (searchContext.active === 'image')
      searchContext.getImageResults(searchQuery[0]);
    else if (searchContext.active === 'video')
      searchContext.getVideoResults(searchQuery[0]);
  }, [location.search, searchContext.active]);

  let indexOfLastItem = urlSearchParams.get('page')
    ? Number(urlSearchParams.get('page')) * paginationContext.itemsPerPage
    : 1 * paginationContext.itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - paginationContext.itemsPerPage;

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
        <div className={`search-${searchContext.active}-container`}>
          {searchContext.active === 'all' ? (
            searchContext.all.length > 0 ? (
              searchContext.all
                .slice(indexOfFirstItem, indexOfLastItem)
                .map((item, index) => (
                  <div className='search-all' key={index}>
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <span>{item.link}</span>
                      <h4 className='title'>{item.title}</h4>
                      <p className='description'>{item.description}</p>
                    </a>
                  </div>
                ))
            ) : (
              <SkeletonComponent type='asd' bp='asd' />
            )
          ) : searchContext.active === 'news' ? (
            searchContext.news.length > 0 ? (
              searchContext.news
                .slice(indexOfFirstItem, indexOfLastItem)
                .map((item, index) => (
                  <div className='search-news' key={index}>
                    <a
                      href={item.source.href}
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <p className='description'>{item.title}</p>
                      <span>{item.source.href}</span>
                    </a>
                  </div>
                ))
            ) : (
              <div className='search-news'>
                <p className='description'>No result yet...</p>
              </div>
            )
          ) : searchContext.active === 'image' ? (
            searchContext.image.length > 0 ? (
              searchContext.image.map((item, index) => (
                <div className='search-image' key={index}>
                  <a
                    href={item.link.href}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <img
                      src={item.image.src}
                      alt='SUAT_BAYRAK'
                      loading='lazy'
                    />
                    <p className='description search-image-p'>
                      {item.link.title}
                    </p>
                  </a>
                </div>
              ))
            ) : (
              <SkeletonComponent type='asd' bp='asd' />
            )
          ) : searchContext.active === 'video' ? (
            searchContext.video.length > 0 ? (
              searchContext.video.map((item, index) => (
                <div className='search-video' key={index}>
                  <ReactPlayer
                    url={item.additional_links?.[0].href}
                    muted={true}
                    width='100%'
                    height='100%'
                  />
                </div>
              ))
            ) : (
              <SkeletonComponent type='asd' bp='asd' />
            )
          ) : (
            'abc'
          )}
        </div>
        <Pagination />

        {/* <SkeletonComponent type='asd' bp='asd' /> */}
      </div>
    </div>
  );
};

export default Search;
