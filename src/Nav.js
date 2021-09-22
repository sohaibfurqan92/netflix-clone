import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Netflix Logo'
        className='nav-logo'
      />
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Superman-facebook.svg/800px-Superman-facebook.svg.png'
        alt='Netflix Logo'
        className='nav-avatar'
      />
    </div>
  );
};

export default Nav;
