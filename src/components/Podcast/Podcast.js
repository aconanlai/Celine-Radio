import React from 'react';

const Podcast = ({ items }) => {
  return <li>{items.content.rendered}</li>
};

export default Podcast;

