/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Post Information
import postTitle from './post/PostTitle';
import postLike from './post/PostLike';
import postDate from './post/PostDate';
import postContent from './post/PostContent';

export default function Post(obj) {
  return (
    <div className='post'>
      <h2>
        {obj.title} {obj.like}
        <span>👍 click하면, like++</span>
      </h2>
      <p>{obj.date}</p>
      <p>{obj.content}</p>
    </div>
  );
}
