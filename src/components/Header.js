import React from 'react';
import '../assets/styles/header.css';
const Header = () => {
  return (
    <>
      <a href='#footer'>Contact</a>
      <a href='#testimonial'>Testimonials</a>
      <a href='#service'>Services</a>
      <a href='#features'>Features</a>
      <a
        href='#banner'
        className='active'
      >
        Home
      </a>
    </>
  );
};

export default Header;
