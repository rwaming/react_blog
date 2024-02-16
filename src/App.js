/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import './styles/App.css';

// component
import Scrollbar from './components/Scrollbar';
import Head from './components/Head';
import Home from './components/Home';

/** {component} App - 항상 렌더링중 @경로 App */
export default function App() {
  const [headProps, setHeadProps] = useState(<Home />);

  // in index.html
  return (
    <div className='App'>
      <Head giveProp={setHeadProps} />
      <div className='body'>
        {headProps}
        <Scrollbar />
      </div>
    </div>
  );
}
