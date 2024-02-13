/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

/**
 * (mousedown) thumb top과 track.커서Y를 반환하는 함수.
 * @add_remove scrollTargets[target]의 track, null
 */
export function dragReady(eTrack) {
  targetPage = eTrack.parentElement;
  targetTrack = eTrack;
  targetThumb = eTrack.querySelector('.thumb');
  clickTop = targetThumb.offsetTop; // 기존 top값
  clickY = eTrack.clientY; // clickY 커서값

  window.addEventListener('mousemove', drag); // 어디로든 움직이면, 드래그 실행
  window.addEventListener('mouseup', dragDone); // 취소 대기 추가
}

/**
 * (mousemove) window.커서Y를 반환, scroll과 thumb top 조정하는 함수
 * @add_remove dragReady(), dragDone()
 */
export function drag(eWindow) {
  moveY = eWindow.clientY - targetPage.offsetTop; // moveY 커서값
  const distance = moveY - clickY; // 아래로 내리면 +, 올리면 -
  const thumbLength = Number.parseInt(
    window.getComputedStyle(targetThumb).getPropertyValue('height'),
    10, // thumb 길이 대입
  );
  const ratio = targetPage.clientHeight / targetPage.scrollHeight;
  // 보이는 길이 / 실제길이 = 0.n

  if (clickTop + distance < 0) {
    // 0보다 작아도 x
    targetThumb.style.top = '0px';
  } else if (targetPage.clientHeight < clickTop + distance + thumbLength) {
    // 타겟 height보다 커도 x
    targetThumb.style.top = `${targetPage.clientHeight - thumbLength}px`;
  } else {
    // 괜찮으면
    targetThumb.style.top = `${clickTop + distance}px`; // 기존 top 기준으로 이동
  }
  targetPage.scrollTo(targetPage.scrollX, targetThumb.offsetTop / ratio); // thumb따라 페이지 이동
}

/**
 * (mouseup) drag관련 이벤트를 제거하는 함수.
 * @add_remove dragReady(), dragDone()
 */
export function dragDone() {
  window.removeEventListener('mousemove', drag); // moveY 얻기 삭제
  window.removeEventListener('mouseup', dragDone); // 취소 대기 삭제
}
