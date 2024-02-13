/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/**
 * (resize) window에 따라 thumb 길이를 조정해주는 함수
 * @add_remove window, null
 */
export default function setThumbLength() {
  scrollTargets.array.forEach((target) => {
    const thumb = target.querySelector('.thumb');

    // 보이는 길이 / 실제길이 = 0.n
    const ratio = target.clientHeight / target.scrollHeight;
    // 보이는 길이 * 0.n = fix에 맞게 작아진 길이 반환
    const thumbLength = target.clientHeight * ratio;

    // 길이 대입
    thumb.style.height = `${thumbLength}px`;
  });
}
