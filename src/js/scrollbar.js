/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import setThumbLength from './scrollbar/setThumbLength';
import scrolling from './scrollbar/scrolling';
import { drag, dragDone, dragReady } from './scrollbar/drag';

// 스크롤바 대상 지정
const scrollTargetNode = document.querySelectorAll('.flexWrap');
const scrollTargets = [...scrollTargetNode];

// drag용 변수
let clickTop; // thumb top
let clickY; // 클릭 커서
let moveY; // 움직인 커서
let targetPage; // 타겟의 track
let targetTrack; // 타겟의 track
let targetThumb; // 타겟의 thumb

// scrollbar 생성
scrollTargets.forEach((target) => {
  // 요소 생성
  const newTrack = document.createElement('div'); // 새 track
  newTrack.classList.add('track');
  const newThumb = document.createElement('div'); // 새 thumb
  newThumb.classList.add('thumb');

  // target에 scrollbar 생성, 객체화
  target.appendChild(newTrack); // target에 div.track 생성
  const track = target.querySelector('.track'); // 객체화
  track.appendChild(newThumb); // target의 하위요소인 div.track에 div.thumb 생성

  // target 스크롤 따라 thumb 이동
  scrolling(); // 페이지 로드시
  target.addEventListener('scroll', scrolling); // 스크롤시마다 재실행

  // target에서 드래그시 thumb이동, 그에 따라 페이지 스크롤
  track.addEventListener('mousedown', dragReady); // 클릭시마다 재실행
});

// Window 이벤트
// 화면 따라 thumb 길이 조정
setThumbLength();
window.addEventListener('resize', setThumbLength); // 창크기 조절시마다 재실행
