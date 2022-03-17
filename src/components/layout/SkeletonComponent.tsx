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

  function largeAllSkeleton(): JSX.Element[] {
    let items = [];
    for (let i = 0; i < 4; i++) {
      items.push(
        <div className='skeleton-item  '>
          <Skeleton width='25%' className='myskeleton' />
          <Skeleton width='50%' className='myskeleton' />
          <Skeleton width='50%' height={75} className='myskeleton' />
        </div>
      );
    }
    return items;
  }
  function largeNewsSkeleton(): JSX.Element[] {
    let items = [];
    for (let i = 0; i < 10; i++) {
      items.push(
        <div className='skeleton-item skeleton-news'>
          <Skeleton width='100%' height={50} className='myskeleton' />
          <Skeleton width='50%' className='myskeleton' />
        </div>
      );
    }
    return items;
  }
  function largeImageSkeleton(): JSX.Element[] {
    let items = [];
    for (let i = 0; i < 21; i++) {
      items.push(
        <div className='skeleton-item'>
          <Skeleton width={175} height={175} className='myskeleton' />
          <Skeleton width={175} className='myskeleton' count={1} />
        </div>
      );
    }
    return items;
  }

  function largeVideoSkeleton(): JSX.Element[] {
    let items = [];
    for (let i = 0; i < 16; i++) {
      items.push(
        <div className='skeleton-item'>
          <Skeleton width='100%' height={250} className='myskeleton' />
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
