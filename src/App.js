/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// component
import Nav from './App/Nav';
import Body from './App/Body';

/** {component} App @경로 App */
export default function App() {
  // in index.html
  return (
    <div className='App'>
      <Nav />
      <Body />
    </div>
  );
}
