import { useEffect } from 'react';
import './Content.css';

export default function Content() {
  function toFeed() {
    // if () {
    // Profile를 보고 있는 상황 + 아래로 스크롤
    // => Feed 보여주기
    // }
    // else if .. 아니고, Feed가 존재하고 있다면, Feed를 숨긴다.
  }

  useEffect(() => {
    window.addEventListener('wheel', toFeed);

    return () => {
      window.removeEventListener('wheel', toFeed);
    };
  }, []);

  return <div className='content'>Content</div>;
}
