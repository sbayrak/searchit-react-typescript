import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='s-navbar'>
      <div className='container-lg nav-items'>
        <div className='s-nav-item'>
          <Link to='/'>
            <img
              src={`${process.env.PUBLIC_URL}/searchit.png`}
              alt='searchit_logo'
              width={200}
            />
          </Link>
        </div>

        <div className='s-nav-item d-flex justify-content-end align-items-center'>
          <div>
            <Link to='/contact' className='text-white'>
              <button className='s-contact active'>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
