import React from 'react';
import logo from '../assets/images/logo.png';
import '../assets/styles/home.css';

const Home = () => {
  return (
    <>
      <img
        className='logo'
        src={logo}
        alt='logo'
      />
      <div className='banner-text'>
        <h1>Hair Studio </h1>
        <p>StylwYour Heir Is Style Your Life</p>
        <div className='banner-btn'>
          {' '}
          <a href='#'>
            <span></span> Find Out
          </a>
          <a href='#'>
            <span></span> Read
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
