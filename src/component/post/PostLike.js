/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const postLike = [];

export default function PostLike(i, location) {
  return <p className={location}>{postLike[i]}</p>;
}
