/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import iconInsta from '../img/icon/instagram.png';

// component(Body)
import Home from './Page/Home';
import Profile from './Page/Profile';
import Portfolio from './Page/Portfolio';
import Blog from './Page/Blog';

/** {component} Head @경로 App/Head */
export default function Head({ giveProp }) {
  Head.propTypes = {
    giveProp: PropTypes.any.isRequired,
  };
  // in App.js
  return (
    <header>
      <h1
        className='homeBtn'
        onClick={() => {
          giveProp(<Home />);
        }}>
        RWAMing
      </h1>
      <nav>
        <p
          className='profileBtn'
          onClick={() => {
            giveProp(<Profile />);
          }}>
          Profile
        </p>
        <p
          className='portfolioBtn'
          onClick={() => {
            giveProp(<Portfolio />);
          }}>
          Portfolio
        </p>
        <p
          className='blogBtn'
          onClick={() => {
            giveProp(<Blog />);
          }}>
          Blog
        </p>
      </nav>
      <div className='headQuick'>
        <a
          href='https://www.instagram.com/art.rwam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
          target='_blink'>
          <img src={iconInsta} width='30px' height='30px' />
        </a>
      </div>
    </header>
  );
}
