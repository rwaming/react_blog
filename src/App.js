import { useEffect, useState } from 'react';
import './App.css';

import Load from './components/Load';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default function App() {
  const [load, setLoad] = useState(<Load />);

  /* load disappear */
  let loadTime;
  useEffect(() => {
    // timeout
    loadTime = setTimeout(() => {
      setLoad();
    }, 10000);
    // click
    function removeLoad() {
      clearTimeout(loadTime);
      setLoad();
    }
    window.addEventListener('click', removeLoad);
    // unmount
    return () => {
      window.removeEventListener('click', removeLoad);
      clearTimeout(loadTime);
    };
  }, []);

  return (
    <div className='app dark'>
      {load}
      <div className='body'>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
