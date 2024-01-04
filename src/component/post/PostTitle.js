/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const postTitle = [];

export default function PostTitle(i, location) {
  return <h3 className={location}>{postTitle[i]}</h3>;
}
