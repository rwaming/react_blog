import { useEffect, useState } from 'react';
import './Content.css';

import FrontPage from './contents/FrontPage';
import BackPage from './contents/BackPage';

import isUp from './contents/pageScroll';

export default function Content() {
  // move by scroll
  const [frontPage, setFrontPage] = useState(<FrontPage />);
  // move by click
  const [backPage, setBackPage] = useState(<BackPage />);
  // for param
  const pageStates = {
    frontPage,
    setFrontPage,
    backPage,
    setBackPage,
  };

  // page move
  useEffect(() => {
    window.addEventListener('wheel', (e) => isUp(e, pageStates));
    return () => {
      window.removeEventListener('wheel', isUp);
    };
  }, []);

  return (
    <div className='content'>
      {frontPage}
      {backPage}
    </div>
  );
}
