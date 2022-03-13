import React from 'react';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='container-lg f-container'>
        <div className='f-item'>
          <a href='/' className='f-link'>
            Suat Bayrak &copy; 2022.
          </a>
        </div>
        <div className='f-item'>
          <ul>
            <li>
              <a href='/'>
                <i className='fa-brands fa-github'></i>
              </a>
            </li>
            <li>
              <a href='/'>
                <i className='fa-brands fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a href='/'>
                <i className='fa-brands fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href='/'>
                <i className='fa-solid fa-window-maximize'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
