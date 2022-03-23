import React from 'react';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='container-lg f-container'>
        <div className='f-item'>
          <a
            href='https://suatbayrak.com'
            className='f-link'
            target='_blank'
            rel='noreferrer noopener'
          >
            Suat Bayrak &copy; 2022.
          </a>
        </div>
        <div className='f-item'>
          <ul>
            <li>
              <a
                href='https://github.com/sbayrak'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa-brands fa-github'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/suat-bayrak/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa-brands fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/sbayrak__/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa-brands fa-instagram'></i>
              </a>
            </li>
            <li>
              <a
                href='https://suatbayrak.com'
                target='_blank'
                rel='noreferrer noopener'
              >
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
