import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/search/SearchState';

const Home = () => {
  const searchContext = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState<string>('');

  console.log(searchContext);

  useEffect(() => {
    searchContext.setSearch(searchInput);
  }, [searchInput]);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <div className='home'>
      <div className='home-wrapper'>
        <form onSubmit={handleSearch}>
          <input
            type='text'
            name='search'
            placeholder='Search something...'
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <span onClick={() => setSearchInput('')}>X</span>
        </form>
        <div className='search-types'>
          <ul>
            <li>
              <button
                className='active'
                onClick={() => searchContext.switchActive('all')}
              >
                <img src={`${process.env.PUBLIC_URL}/search.svg`} alt='' />
                &nbsp;
                <span>All</span>
              </button>
            </li>
            <li>
              <button onClick={() => searchContext.switchActive('news')}>
                <img src={`${process.env.PUBLIC_URL}/news.svg`} alt='' /> &nbsp;
                <span>News</span>
              </button>
            </li>
            <li>
              <button onClick={() => searchContext.switchActive('image')}>
                <img src={`${process.env.PUBLIC_URL}/image.svg`} alt='' />{' '}
                &nbsp;
                <span>Image</span>
              </button>
            </li>
            <li>
              <button onClick={() => searchContext.switchActive('video')}>
                <img src={`${process.env.PUBLIC_URL}/video.svg`} alt='' />{' '}
                &nbsp;
                <span>Video</span>
              </button>
            </li>
          </ul>
        </div>{' '}
      </div>
    </div>
  );
};

export default Home;
