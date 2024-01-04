/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function List(obj) {
  return (
    <div className='list'>
      <h3>
        {obj.title} {obj.like}
      </h3>
      <p>{obj.date}</p>
      <hr />
    </div>
  );
}
