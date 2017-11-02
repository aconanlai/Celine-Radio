import React  from 'react';

const Podcast = ({items}) => {
  console.log(items)
  return (
    <li>{items.content.rendered}</li>
  )
};

export default Podcast; 

