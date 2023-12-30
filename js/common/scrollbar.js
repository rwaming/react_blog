//const
// html, head, body

// scrollbar 생성기
const newTrack = document.createElement("div"); // track
newTrack.classList.add("track");
const newThumb = document.createElement("div"); // thumb
newThumb.classList.add("thumb");

// scrollbar 생성, 객체화
body.appendChild(newTrack); // body > div.track 생성
const track = document.querySelector(".track");
track.appendChild(newThumb); // div.track > div.thumb 생성
const thumb = document.querySelector(".thumb");

// 하위
// scrollbar 스크립트 생성기
function add_scrollbar(feature) {
    const newScript = document.createElement('script');
    newScript.src = 'js/common/scrollbar/'+feature+'.js';
    newScript.defer = true;
    head.appendChild(newScript);
}

// scrollbar 하위 스크립트
add_scrollbar('length_move'); // thumb 길이, 페이지위치에 따른 top번화
add_scrollbar('drag');