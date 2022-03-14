import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SearchContext } from '../../context/search/SearchState';

interface Props {
  type: string;
  bp: string;
}
const SkeletonComponent = ({ type, bp }: Props) => {
  const searchContext = useContext(SearchContext);
  // const largeSkeleton = (

  // )

  function largeAllSkeleton() {
    let items = [];
    for (let i = 0; i < 4; i++) {
      items.push(
        <div className='skeleton-item'>
          <Skeleton width={200} className='myskeleton' />
          <Skeleton width={300} className='myskeleton' />
          <Skeleton width={500} height={75} className='myskeleton' />
        </div>
      );
    }
    return items;
  }
  function largeNewsSkeleton() {
    let items = [];
    for (let i = 0; i < 4; i++) {
      items.push(
        <div className='skeleton-item'>
          <Skeleton width={250} className='myskeleton' />
          <Skeleton width={450} className='myskeleton' />
          <Skeleton width={650} height={75} className='myskeleton' />
        </div>
      );
    }
    return items;
  }
  return (
    <div
      className='skeleton-container'
      style={{
        display: 'flex',
        flexDirection: searchContext.active === 'all' ? 'column' : 'row',
      }}
    >
      {largeAllSkeleton()}
    </div>
  );
};

export default SkeletonComponent;
