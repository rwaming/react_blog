//const
// html, head, body, track, thumb
//사용불가
// newTrack, newThumb

// 빈 변수
let thumb_length;
let ratio;

// thumb 길이
function set_thumb_length() {
    const all = html.scrollHeight; // 실제 길이
    const window = html.clientHeight; // 보이는 길이
    ratio = window / all; // 실제 길이 / 보이는 길이 = 0.n
    thumb_length = window * ratio; // 보이는 길이 * 0.n = fix에 맞게 작아진 길이 반환
    thumb.style.height = thumb_length + "px";
}
set_thumb_length(); // 페이지 로드시
window.addEventListener("resize", set_thumb_length); // 창크기 조절시

// thumb 이동
function thumb_move() {
    const all = html.scrollHeight; // 실제 길이
    const window = html.clientHeight; // 보이는 길이
    ratio = window / all; // 실제 길이 / 보이는 길이 = 0.n
    const page_Y = html.scrollTop; // 실제 페이지 위치
    const thumb_Y = page_Y * ratio; // 실제 페이지 위치 / 0.n = fix에 맞게 높이 반환
    thumb.style.top = thumb_Y + "px";
}
thumb_move(); // 페이지 로드시
window.addEventListener("scroll", thumb_move); // 스크롤시