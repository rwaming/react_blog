/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function BlogNav() {
  return (
    <div className='blogNav'>
      <h1 className='blogNavTitle'>RWAMing</h1>
      <div className='blogNavCategory'>
        <p>Profile</p>
        <p>Portfolio</p>
        <p>Blog</p>
      </div>
      <div className='blogNavQuick'>
        <img src='../img/icon/instagram.png' />
      </div>
    </div>
  );
}
