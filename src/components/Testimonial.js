import React from 'react';
import image1 from '../assets/images/img-1.jpg';
import image2 from '../assets/images/img-2.jpg';
import image3 from '../assets/images/img-3.jpg';
import '../assets/styles/testimonial.css';
const Testimonial = () => {
  return (
    <>
      <div className='title-text'>
        <p>TESTIMONIAL</p>
        <h1>What Client Say's</h1>
      </div>
      <div className='testimonial-row'>
        <div className='testimonial-column'>
          <div className='user'>
            <img
              src={image1}
              alt='User1'
            />
            <div className='user-info'>
              <h4>
                KEN NORMAN <i class='fab fa-twitter'></i>
              </h4>
              <small>@kennorman</small>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            totam, ut, error blanditiis reprehenderit adipisci voluptatum,
            ducimus fuga quae consequatur sit! Eaque voluptates explicabo, nulla
            ut eius dignissimos possimus libero labore quo, necessitatibus
            totam.
          </p>
        </div>
        <div className='testimonial-column'>
          <div className='user'>
            <img
              src={image2}
              alt='User1'
            />
            <div className='user-info'>
              <h4>
                ALIS MARTIN <i class='fab fa-twitter'></i>
              </h4>
              <small>@alismartin</small>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            totam, ut, error blanditiis reprehenderit adipisci voluptatum,
            ducimus fuga quae consequatur sit! Eaque voluptates explicabo
          </p>
        </div>
        <div className='testimonial-column'>
          <div className='user'>
            <img
              src={image3}
              alt='User1'
            />
            <div className='user-info'>
              <h4>
                JACK SPARROW <i class='fab fa-twitter'></i>
              </h4>
              <small>@jacksparrow</small>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            totam, ut, error blanditiis reprehenderit adipisci voluptatum,
            ducimus fuga quae consequatur sit! Eaque voluptates explicabo, nulla
            ut eius dignissimos possimus libero labore quo, necessitatibus
            totam.
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
