/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// component
import BlogNav from './BlogBody/BlogNav';
import BlogBody from './BlogBody/BlogBody';

/** {component} App @경로 App */
export default function App() {
  // in index.html
  return (
    <div className='App'>
      <BlogNav />
      <BlogBody />
    </div>
  );
}
