/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import './styles/App.css';

// components
import Head from './components/Head';

/** {component} App - 항상 렌더링중 @경로 App */
export default function App() {
  const [body, setBody] = useState();

  // in index.html
  return (
    <div className='App'>
      <Head setBody={setBody} />
      <div className='body'>{body}</div>
    </div>
  );
}
