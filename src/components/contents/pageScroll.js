/** Move from now page to another as user scroll up or down.
 * @param event
 * @param states
 */
export default function pageScroll() {
  // 스크롤 기준 = wheel했는데 top이 0인가 아닌가
  // eslint-disable-next-line no-unused-vars
  const up = window.scrollY === 0; // scroll up?

  // 자연스러운 모션으로 움직이게 할 방법 찾아보기
  // 아직 이동중일 때, 더 스크롤하거나, 역스크롤할 때 어떻게 할지 생각해야 함.
  // 모션이 완료된 후에 어디에 도착했는지 대입할 변수가 필요함.
  // if (up) {
  // } else {
  // }

  // 마지막엔 0으로 원상복귀
  window.scrollTo(window.scrollX, 0);
}
