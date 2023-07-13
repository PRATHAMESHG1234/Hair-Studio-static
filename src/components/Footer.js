import React from 'react';
import footerImg from '../assets/images/footer-img.png';
import '../assets/styles/footer.css';
const Footer = () => {
  return (
    <>
      <img
        src={footerImg}
        alt='footerImg'
        className='footer-img'
      />
      <div className='title-text'>
        <p>CONTACT</p>
        <h1>Visit shop Today</h1>
      </div>
      <div className='footer-row'>
        <div className='footer-left'>
          <h1>Opening Hours</h1>
          <p>
            {' '}
            <i class='far fa-clock'></i>Monday to Friday - 9am to 9pm
          </p>
          <p>
            {' '}
            <i class='far fa-clock'></i>saturday to sunday - 8am to 11pm
          </p>
        </div>

        <div className='footer-right'>
          {' '}
          <h1>Get In Touch</h1>
          <p>
            {' '}
            #30IN abc colony,xyz City IN <i class='fas fa-map-marker-alt'></i>
          </p>
          <p>
            {' '}
            example@gmail.com <i class='far fa-paper-plane'></i>
          </p>
          <p>
            {' '}
            1233456677 <i class='fas fa-phone'></i>
          </p>
        </div>
      </div>
      <div className='social-links'>
        <i class='fab fa-facebook'></i>
        <i class='fab fa-twitter'></i>
        <i class='fab fa-instagram'></i>
        <i class='fab fa-youtube'></i>
        <p>Copyright Easy Tutorials</p>
      </div>
    </>
  );
};

export default Footer;
