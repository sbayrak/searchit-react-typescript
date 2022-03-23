import React from 'react';

const Contact = () => {
  return (
    <div className='contact-wrapper mt-5'>
      <div className='contact-container'>
        <div className='contact'>
          <img
            src='/resume.svg'
            alt='suatbayrak_resume'
            className='contact-img'
          />
          <h2>
            Hello! I am{' '}
            <a
              href='https://suatbayrak.com'
              target={'_blank'}
              rel='noreferrer noopener'
            >
              Suat Bayrak
            </a>
          </h2>
          <h4>Thank you for visiting my website.</h4>
          <a
            href='https://www.suatbayrak.com/resume.pdf'
            className='resume-link'
            target={'_blank'}
            rel='noreferrer noopener'
          >
            <button className='c-btn active'>Resume</button>
          </a>
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

export default Contact;
