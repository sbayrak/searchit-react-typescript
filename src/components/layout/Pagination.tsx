import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { PaginationContext } from '../../context/pagination/PaginationState';
import { SearchContext } from '../../context/search/SearchState';

const Pagination = () => {
  const paginationContext = useContext(PaginationContext);
  const searchContext = useContext(SearchContext);
  const navigation = useNavigate();
  const location = useLocation();
  const [urlSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchContext.active === 'all' && searchContext.all.length > 0)
      paginationContext.changePage(Math.ceil(searchContext.all.length / 10));
    else if (searchContext.active === 'news' && searchContext.news.length > 0)
      paginationContext.changePage(Math.ceil(searchContext.news.length / 10));
    else if (searchContext.active === 'image' && searchContext.image.length > 0)
      paginationContext.changePage(Math.ceil(searchContext.image.length / 10));
  }, [
    searchContext.active,
    searchContext.all.length,
    searchContext.news.length,
    searchContext.image.length,
  ]);

  useEffect(() => {
    detectPageNumber();
  }, [paginationContext.page]);

  function handleChangeCurrentPage(i: number) {
    let currentPage = location.search;
    let getPageNumber: number;
    let newPage: string = '';
    // console.log(currentPage.split('&')[1].split('=')); // ['page', '12'] verdi

    getPageNumber = Number(currentPage.split('&')[1].split('=')[1]);
    if (getPageNumber >= 10) newPage = currentPage.slice(0, -2) + i;
    else if (getPageNumber < 10) newPage = currentPage.slice(0, -1) + i;

    navigation(`/search${newPage}`);
  }

  function detectPageNumber() {
    let result = [];
    for (let i = 1; i <= paginationContext.page; i++) {
      result.push(
        <li
          className={`page-item ${
            urlSearchParams.get('page') &&
            i === Number(urlSearchParams.get('page')) &&
            'active'
          }`}
          aria-current='page'
          key={i}
        >
          <span
            className='page-link'
            onClick={() => handleChangeCurrentPage(i)}
          >
            {i}
          </span>
        </li>
      );
    }
    return result;
  }

  return (
    <nav aria-label='...' className='mt-5'>
      <ul className='pagination  '>
        <li className='page-item disabled'>
          <span className='page-link'>Previous</span>
        </li>
        {detectPageNumber()}
        {/* <li className='page-item'>
          <a className='page-link' href='#'>
            1
          </a>
        </li>
        <li className='page-item active' aria-current='page'>
          <span className='page-link'>2</span>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            3
          </a>
        </li>*/}
        <li className='page-item'>
          <a className='page-link' href='#'>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
