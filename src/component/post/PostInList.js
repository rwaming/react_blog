/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PostTitle from './PostTitle';
import PostLike from './PostLike';
import PostDate from './PostDate';
import PostContent from './PostContent';

export default function PostInList(obj) {
  return (
    <div className='postInList'>
      <PostTitle i={obj.i} />
      <PostLike i={obj.i} />
      <PostDate i={obj.i} />
      <PostContent i={obj.i} />
    </div>
  );
}
