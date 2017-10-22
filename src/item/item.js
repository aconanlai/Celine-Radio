import React, {Component} from 'react';
// import 'item.css';

const Item = ({item}) => {
  console.log(item)
  return (
    <li>{item.content.rendered}</li>
  )
};

export default Item; 

