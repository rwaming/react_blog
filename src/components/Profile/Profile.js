/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

/** Component */
export default function Profile() {
  return (
    <div className='profile'>
      <div className='viewer'>
        <div className='title'>
          <h3>RWAMing</h3>
          <p className='subtitle'>라민</p>
          <blockquote className='intro'>
            <p>이것저것 만들어보는 게 재밌는 초보 개발자</p>
          </blockquote>
        </div>
        <hr className='titleLine'></hr>
        <div className='content'>
          <ul>
            <li>
              <h6>Start Coding Date</h6>
              2023/ 09/ 12
            </li>
            <li>
              <h6>Start GitHub</h6>
              2023/ 12/ 10
            </li>
            <li>
              <h6>Beta GitHub Blog</h6>
              2024/ 1/ 6
            </li>
          </ul>
          <div className='body'>
            <h4>아무말 해보는 프로필</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
