/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

/** Component */
export default function BlogPost(obj) {
  return (
    <div className='listEach'>
      <h3>
        {obj.title} {obj.like}
      </h3>
      <p>{obj.date}</p>
      <hr />
    </div>
  );
}
