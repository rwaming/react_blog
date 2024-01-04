/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PostTitle from './PostTitle';
import PostLike from './PostLike';

export default function PostInList(i) {
  return (
    <div className='postInList'>
      <PostTitle />
      <PostLike />
    </div>
  );
}
