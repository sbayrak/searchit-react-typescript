import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='notfound-wrapper'>
      <div className='notfound-container'>
        <img src='/notfound.svg' alt='searchit_not_found' />
      </div>
      <div className='notfound mt-4'>
        <button className='n-btn active mx-4' onClick={() => navigate(-1)}>
          Go Back
        </button>
        <Link to='/contact'>
          <button className='n-btn active mx-4'>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
