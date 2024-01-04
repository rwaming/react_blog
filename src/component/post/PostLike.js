/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const postLike = [];

export default function PostLike(obj) {
  return <p className={obj.location}>{postLike[obj.i]}</p>;
}
