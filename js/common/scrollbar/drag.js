// 객체
const html = document.documentElement;
const body = document.body;
const track = document.querySelector(".track");
const thumb = document.querySelector(".thumb");

// 클릭한 위치 구하기 (track mousedown)
// window 이동위치 구하기 (window mousemove)
// 클릭위치 - 이동위치
// 드래그 이벤트 끝내기 (window mouseup)
// 모든 이벤트 삭제

let prevTop; // thumb top
let prev, next; // 커서

track.addEventListener("mousedown", getPrev); // 클릭하면 커서값 얻기

function getPrev(e_track) {
    prevTop = parseInt(thumb.getAttribute("top")); // 기존 top값
    prev = e_track.clientY; // 클릭시 커서값
    window.addEventListener("mousemove", getNext); // 움직이면 커서값 얻기
}
function getNext(e_window) {
    next = e_window.clientY; // next 반환
    move();
}
function move() {
    const drag = next - prev; // 아래로 내리면 +, 올리면 -
    thumb.style.top = prevTop + drag + "px"; // 기존 top 기준으로 이동
}