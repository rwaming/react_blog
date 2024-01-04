/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const postDate = [];

export default function PostDate(obj) {
  return <p className={obj.location}>{postDate[obj.i]}</p>;
}
