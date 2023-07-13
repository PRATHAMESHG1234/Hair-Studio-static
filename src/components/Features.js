import React from 'react';
import '../assets/styles/feature.css';
import barberMan from '../assets/images/barber-man.jpg';
const Features = () => {
  return (
    <>
      <div className='title-text'>
        <p>FEATURES</p>
        <h1>Why Choose Us</h1>
      </div>
      <div className='feature-box'>
        <div className='features'>
          <h1>Exprienced Staff</h1>
          <div className='features-desc'>
            <div className='feature-icon'>
              <i class='fas fa-shield-alt'></i>
            </div>
            <div className='feature-text'>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                praesentium ad facilis.
              </p>
            </div>
          </div>
          <h1>Pre Booking Online</h1>
          <div className='features-desc'>
            <div className='feature-icon'>
              <i class='fas fa-check-square'></i>
            </div>
            <div className='feature-text'>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                praesentium ad facilis.
              </p>
            </div>
          </div>
          <h1>Affordable Cost</h1>
          <div className='features-desc'>
            <div className='feature-icon'>
              <i class='fas fa-rupee-sign'></i>
            </div>
            <div className='feature-text'>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                praesentium ad facilis.
              </p>
            </div>
          </div>
        </div>

        <div className='features-img'>
          <img
            src={barberMan}
            alt='barberMan'
          />{' '}
        </div>
      </div>
    </>
  );
};

export default Features;
