/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';

import Home from './Home/Home';
import Profile from './Profile/Profile';
import Portfolio from './Portfolio/Portfolio';
import Blog from './Blog/Blog';

import iconInsta from '../assets/img/icon_instagram.png';
import iconNaver from '../assets/img/icon_naver.png';

/** Component
 * @property {function} setBody Change body, a head btn clicked.
 */
export default function Head(props) {
  const { setBody } = props;
  return (
    <header>
      <h1
        className='home-btn'
        onClick={() => {
          setBody(<Home />);
        }}>
        RWAMing
      </h1>
      <nav className='menu'>
        <ul>
          <li>
            <button
              type='button'
              className='profile menu-btn'
              onClick={() => {
                setBody(<Profile />);
              }}>
              Profile
            </button>
          </li>
          <li>
            <button
              type='button'
              className='portfolio menu-btn'
              onClick={() => {
                setBody(<Portfolio />);
              }}>
              Portfolio
            </button>
          </li>
          <li>
            <button
              type='button'
              className='blog menu-btn'
              onClick={() => {
                setBody(<Blog />);
              }}>
              Blog
            </button>
          </li>
        </ul>
      </nav>
      <div className='quick'>
        <a
          className='quick-btn'
          href='https://www.instagram.com/art.rwam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
          target='_blink'>
          <img src={iconInsta} width='30px' height='30px' />
        </a>
        <a
          className='quick-btn'
          href='https://blog.naver.com/rwaming'
          target='_blink'>
          <img src={iconNaver} width='30px' height='28px' />
        </a>
      </div>
    </header>
  );
}
