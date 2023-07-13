import React from 'react';
import pic1 from '../assets/images/pic-1.jpg';
import pic2 from '../assets/images/pic-2.jpg';
import pic3 from '../assets/images/pic-3.jpg';
import pic4 from '../assets/images/pic-4.jpg';
import '../assets/styles/service.css';
const Service = () => {
  return (
    <>
      <div className='title-text'>
        <p>SERVICES</p>
        <h1>We Provide Better</h1>
      </div>
      <div className='service-box'>
        <div className='single-service'>
          <img
            src={pic1}
            alt='pic1'
          />
          <div className='overlay'></div>
          <div className='service-desc'>
            <h3>Hair Styling</h3>
            <hr />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className='single-service'>
          {' '}
          <img
            src={pic2}
            alt='pic1'
          />{' '}
          <div className='overlay'></div>
          <div className='service-desc'>
            <h3>Hair Cut</h3>
            <hr />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className='single-service'>
          {' '}
          <img
            src={pic3}
            alt='pic1'
          />{' '}
          <div className='overlay'></div>
          <div className='service-desc'>
            <h3>Beard Trim</h3>
            <hr />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className='single-service'>
          {' '}
          <img
            src={pic4}
            alt='pic1'
          />{' '}
          <div className='overlay'></div>
          <div className='service-desc'>
            <h3>Dry Shampoo</h3>
            <hr />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
