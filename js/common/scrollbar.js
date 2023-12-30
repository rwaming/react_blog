// 객체
const html = document.documentElement;
const body = document.body;

// 생성기
const newTrack = document.createElement('div'); // track
newTrack.classList.add('track');
const newThumb = document.createElement('div'); // thumb
newThumb.classList.add('thumb');

// HTML에 스크롤바 구성
body.appendChild(newTrack); // body > div.track 생성
const track = document.querySelector('.track');
track.appendChild(newThumb); // div.track > div.thumb 생성
const thumb = document.querySelector('.thumb');