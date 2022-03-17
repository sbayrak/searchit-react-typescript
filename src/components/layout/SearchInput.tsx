import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/search/SearchState';

const SearchInput = () => {
  const searchContext = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState<string>('');
  const navigation = useNavigate();
  const location = useLocation();

  console.log(location);

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
    navigation('/search');
  };

  return (
    <>
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
              className={searchContext.active === 'all' ? 'active' : ''}
              onClick={() => searchContext.switchActive('all')}
            >
              {/* <img src={`${process.env.PUBLIC_URL}/search.svg`} alt='' /> */}
              <i className='fa-solid fa-magnifying-glass'></i>
              &nbsp;
              <span>All</span>
            </button>
          </li>
          <li>
            <button
              className={searchContext.active === 'news' ? 'active' : ''}
              onClick={() => searchContext.switchActive('news')}
            >
              {/* <img src={`${process.env.PUBLIC_URL}/news.svg`} alt='' /> */}
              <i className='fa-solid fa-newspaper'></i>
              &nbsp;
              <span>News</span>
            </button>
          </li>
          <li>
            <button
              className={searchContext.active === 'image' ? 'active' : ''}
              onClick={() => searchContext.switchActive('image')}
            >
              {/* <img src={`${process.env.PUBLIC_URL}/image.svg`} alt='' />  */}
              <i className='fa-solid fa-image'></i>
              &nbsp;
              <span>Image</span>
            </button>
          </li>
          <li>
            <button
              className={searchContext.active === 'video' ? 'active' : ''}
              onClick={() => searchContext.switchActive('video')}
            >
              {/* <img src={`${process.env.PUBLIC_URL}/video.svg`} alt='' />  */}
              <i className='fa-solid fa-circle-play'></i>
              &nbsp;
              <span>Video</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SearchInput;
