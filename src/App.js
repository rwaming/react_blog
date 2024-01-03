/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// App도 일종의 component라고 볼 수 있음
function App() {
  // useState(a) = [a, a edit용 함수] a에 여러 자료형 대입 가능
  const [title, titleEdit] = useState(['제목2', '제목1', '제목4', '제목3']);

  const [good, goodEdit] = useState(0);
  function goodPlus() {
    goodEdit(good + 1);
  }
  // plusGood(good + 1); // 무한 렌더링이 생김!! 금지

  // return 내 최상위 태그는 1개만 사용 가능 ex. <div></div><div></div>.. 불가
  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3>
          {title[0]} <span onClick={goodPlus}>👍</span> {good}
        </h3>
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

      <Modal />
    </div>
  );
}

// component 만들기
// (component 내 component 가능! 다만, 너무너무 많이 만들면 그것도 관리 힘듦..)
// 보통 아래 것을 만듦
// 반복되는 HTML태그 덩어리
// 자주 변경되는 HTML UI들
// 추가 페이지 만들때도 컴포넌트 사용
function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
