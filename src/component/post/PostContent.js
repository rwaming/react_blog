/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Post Content List
import content1 from './postContent/content1';

const postContent = [content1];

export default function PostContent(obj) {
  return <p className={obj.location}>{postContent[obj.i]}</p>;
}
