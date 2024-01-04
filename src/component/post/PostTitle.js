/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const postTitle = [];

export default function PostTitle(obj) {
  return <h3 className={obj.location}>{postTitle[obj.i]}</h3>;
}
