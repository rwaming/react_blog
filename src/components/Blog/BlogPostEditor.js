/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

/** Component */
export default function BlogPostEditor(post) {
  return (
    <div className='flexWrap'>
      <div className='postEditor'>
        <h3>편집기</h3>
        <div className='title'>
          <h3>
            <input type='text' placeholder='타이틀' />
          </h3>
          <p className='subtitle'>
            <input type='text' placeholder='서브타이틀' />
          </p>
          <blockquote>
            <p>
              <textarea placeholder='서론'></textarea>
              <input type='button' value='x' />
            </p>
          </blockquote>
          <hr className='titleLine' />
        </div>

        <div className='content'>
          <ol className='order'>
            <li className='orderTitle'>목차</li>
            <li className='orderList'></li>
          </ol>

          <div className='quick'></div>

          <div className='body'>
            <textarea placeholder='내용을 입력하세요.'></textarea>
          </div>

          <footer>
            <hr className='footLine' />
          </footer>
        </div>
      </div>

      <div className='postViewer'></div>
      <button className='postingButton' onClick={post.add}>
        포스트 등록
      </button>
    </div>
  );
}
