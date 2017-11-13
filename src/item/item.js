import React from 'react';
// import 'item.css';

const Item = ({ item }) => {
  function createMarkup() {
    return { __html: item.content.rendered };
  }
  return (
    <li>
       <div dangerouslySetInnerHTML={createMarkup()} />
    </li>
  )
};

export default Item;

