import React from 'react'
import './header.css'
import CTA from './CTA';
import HeaderSocial from './HeaderSocials';

function Headers () {
  return (
    <header >
      <div id='home' className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Luis Rayo</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img className='me2' src='https://i.ibb.co/1KTF0Tg/pngwing-com.png' alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Headers