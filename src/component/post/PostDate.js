/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const postDate = [];

export default function PostDate(i, location) {
  return <p className={location}>{postDate[i]}</p>;
}
