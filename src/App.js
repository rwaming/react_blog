/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// component
import Scrollbar from './App/Scrollbar';
import Head from './App/Head';
import Home from './App/Page/Home';

/** {component} App - 항상 렌더링중 @경로 App */
export default function App() {
  const [headProps, setHeadProps] = useState(<Home />);

  // in index.html
  return (
    <div className='App'>
      <Head giveProp={setHeadProps} />
      <div className='page'>
        {headProps}
        <Scrollbar />
      </div>
    </div>
  );
}
