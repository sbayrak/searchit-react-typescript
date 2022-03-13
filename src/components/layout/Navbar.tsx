import React from 'react';
import Home from '../Home';

const Navbar = () => {
  return (
    <div className='s-navbar'>
      <div className='container-lg nav-items'>
        <div className='s-nav-item'>
          <a href='/'>
            <img
              src={`${process.env.PUBLIC_URL}/searchit.png`}
              alt='searchit_logo'
              width={200}
            />
          </a>
        </div>

        <div className='s-nav-item d-flex justify-content-end align-items-center'>
          <div>
            <a href='/' className='text-white'>
              <button className='s-contact active'>Contact</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
