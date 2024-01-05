/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

// component
import BlogList from './BlogList/BlogList';
import PostEditor from './BlogPostWriter';

/** {component} BlogBody @경로 App/Blogbody */
export default function BlogBody(blogBody) {
  // var
  const sections = {
    list: <BlogList />,
    postEditor: <PostEditor />,
  };

  // state
  const [section, sectionEdit] = useState(sections.list);

  // FX
  useEffect(() => {
    const newLoadBG = document.createElement('div');
    newLoadBG.classList.add('loadBG');
    const app = document.querySelector('.App');
    app.appendChild(newLoadBG);
  }, [section]);

  // in App.js
  return <div className='blogBody'>{section}</div>;
}
