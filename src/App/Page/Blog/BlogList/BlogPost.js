/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

/** {component} List @경로 App/BlogList/BlogPost */
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
