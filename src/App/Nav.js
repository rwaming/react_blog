/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// component
import Profile from './Body/Profile';
import Portfolio from './Body/Portfolio';
import Blog from './Body/Blog';

/** {component} Nav @경로 App/Nav */
export default function Nav() {
  // state
  const sections = [];
  const [section, sectionEdit] = useState(sections);
  function sectionChange(i) {}

  // in App.js
  return (
    <div className='Nav'>
      <h1 className='NavTitle'>RWAMing</h1>
      <div className='NavCategory'>
        <p onClick={sectionChange(0)}>Profile</p>
        <p onClick={sectionChange(1)}>Portfolio</p>
        <p onClick={sectionChange(2)}>Blog</p>
      </div>
      <div className='NavQuick'>
        <a
          href='https://www.instagram.com/art.rwam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
          target='_blink'>
          <img src={'../img/icon/instagram.png'} width='40px' height='40px' />
        </a>
      </div>
    </div>
  );
}
