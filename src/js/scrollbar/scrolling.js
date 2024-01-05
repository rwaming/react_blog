/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/**
 * (scroll) scrollTargets[target]의 thumb top을 조정해주는 함수
 * @add_remove scrollTargets[target], null
 */
export default function scrolling() {
  scrollTargets.array.forEach((target) => {
    const thumb = target.querySelector('.thumb'); // target의 thumb

    // 보이는 길이 / 실제 길이 = 0.n
    const ratio = target.clientHeight / target.scrollHeight;

    // 실제 위치
    const pageY = target.scrollTop;
    // 실제 위치 * 0.n = fix에 맞게 작아진 Y 반환
    const thumbY = pageY * ratio;

    // thumb top에 대입
    thumb.style.top = `${thumbY}px`;
  });
}
