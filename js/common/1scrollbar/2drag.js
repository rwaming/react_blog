//const
// html, head, body, track, thumb
//let
// thumb_length, ratio
//사용불가
// newTrack, newThumb

// 빈 변수
let clickTop; // thumb top
let clickY, moveY; // 커서

// 클릭하면, clickY, clickTop 얻기 실행
track.addEventListener("mousedown", get_clickY);

// clickY, clickTop 얻기
function get_clickY(e_track) {
    clickTop = thumb.offsetTop; // 기존 top값
    clickY = e_track.clientY; // clickY 커서값

    window.addEventListener("mousemove", get_moveY); // 움직이면, moveY 얻기 실행
    window.addEventListener("mouseup", drag_done); // 취소 대기 추가
}
// moveY 얻기
function get_moveY(e_window) {
    moveY = e_window.clientY; // moveY 커서값
    drag(); // 드래그
}
// 드래그
function drag() {
    const distance = moveY - clickY; // 아래로 내리면 +, 올리면 -
    if (clickTop + distance < 0) {
        // 0보다 작으면
        thumb.style.top = "0px";
    } else if (html.clientHeight < clickTop + distance + thumb_length) {
        // window보다 크면
        thumb.style.top = html.clientHeight - thumb_length + "px";
    } else {
        // 문제 없을시
        thumb.style.top = clickTop + distance + "px"; // 기존 top 기준으로 이동
    }
    window.scrollTo(window.scrollX, thumb.offsetTop / ratio); // thumb따라 페이지 이동
}
// 취소
function drag_done() {
    window.removeEventListener("mousemove", get_moveY); // moveY 얻기 삭제
    window.removeEventListener("mouseup", drag_done); // 취소 대기 삭제
}