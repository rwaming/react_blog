/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // useState(a) = [a, a edit용 함수] a에 여러 자료형 대입 가능
  const [title, titleEdit] = useState(['제목2', '제목1', '제목4', '제목3']);
  function titleAlign() {
    const title_copy = [...title]; // deep copy
    title_copy.sort();
    titleEdit(title_copy);
  }

  const [good, goodEdit] = useState(0);
  function goodPlus() {
    goodEdit(good + 1);
  }
  // plusGood(good + 1); // 무한 렌더링이 생김!! 금지

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <p>
          <span onClick={goodPlus}>👍</span> {good}
        </p>
        <button onClick={titleAlign}>🚻</button>
        <h3>{title[0]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3> {title[1]} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3> {title[2]} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3> {title[3]} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
