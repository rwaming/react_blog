/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

// component
import Nav from './component/Nav';
import List from './component/List';
import Post from './component/Post';

// *** result ***
function App(obj) {
  return (
    <div className='App'>
      <Nav />
      <List />
    </div>
  );
}
export default App;
