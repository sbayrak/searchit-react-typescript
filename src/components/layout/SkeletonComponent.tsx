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
    for (let i = 0; i < 10; i++) {
      items.push(
        <div className='skeleton-item'>
          <Skeleton width={550} height={50} className='myskeleton' />
          <Skeleton width={350} className='myskeleton' />
        </div>
      );
    }
    return items;
  }
  function largeImageSkeleton() {
    let items = [];
    for (let i = 0; i < 21; i++) {
      items.push(
        <div className='skeleton-item'>
          <Skeleton width={175} height={175} className='myskeleton' />
          <Skeleton width={175} className='myskeleton' count={2} />
        </div>
      );
    }
    return items;
  }

  function largeVideoSkeleton() {
    let items = [];
    for (let i = 0; i < 16; i++) {
      items.push(
        <div className='skeleton-item' style={{ padding: '0 10px' }}>
          <Skeleton width={300} height={200} className='myskeleton' />
        </div>
      );
    }
    return items;
  }
  return (
    <div
      className={`skeleton-container skeleton-${searchContext.active}-container`}
    >
      {/* {largeAllSkeleton()} */}
      {/* {largeNewsSkeleton()} */}
      {/* {largeImageSkeleton()} */}
      {/* {largeVideoSkeleton()} */}
      {searchContext.active === 'all'
        ? largeAllSkeleton()
        : searchContext.active === 'news'
        ? largeNewsSkeleton()
        : searchContext.active === 'image'
        ? largeImageSkeleton()
        : searchContext.active === 'video'
        ? largeVideoSkeleton()
        : ''}
    </div>
  );
};

export default SkeletonComponent;
