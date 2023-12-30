// 객체
const html = document.documentElement;
const body = document.body;

// 생성기
const newTrack = document.createElement("div"); // track
newTrack.classList.add("track");
const newThumb = document.createElement("div"); // thumb
newThumb.classList.add("thumb");

// HTML에 스크롤바 구성
body.appendChild(newTrack); // body > div.track 생성
const track = document.querySelector(".track");
track.appendChild(newThumb); // div.track > div.thumb 생성
const thumb = document.querySelector(".thumb");

// thumb 길이
function thumb_length() {
    const all = html.scrollHeight; // 실제 길이
    const window = html.clientHeight; // 보이는 길이
    const ratio = window / all; // 실제 길이 / 보이는 길이 = 0.n
    const length = window * ratio; // 보이는 길이 * 0.n = fix에 맞게 작아진 길이 반환
    thumb.style.height = length + "px";
}
thumb_length(); // 페이지 로드시
window.addEventListener("resize", thumb_length); // 창크기 조절시

// thumb 이동
function thumb_move() {
    const all = html.scrollHeight; // 실제 길이
    const window = html.clientHeight; // 보이는 길이
    const ratio = window / all; // 실제 길이 / 보이는 길이 = 0.n
    const page_Y = html.scrollTop; // 실제 페이지 위치
    const thumb_Y = page_Y * ratio; // 실제 페이지 위치 / 0.n = fix에 맞게 높이 반환
    thumb.style.top = thumb_Y + "px";
}
thumb_move(); // 페이지 로드시
window.addEventListener("scroll", thumb_move); // 스크롤시