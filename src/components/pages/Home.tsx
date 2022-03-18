import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/search/SearchState';
import SearchInput from '../layout/SearchInput';

const Home = () => {
  const searchContext = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState<string>('');
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <div className='home'>
      <div className='home-wrapper'>
        <SearchInput></SearchInput>
      </div>
    </div>
  );
};

export default Home;
