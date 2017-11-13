import React from 'react';

const Episode = (props) => {
  return (
    <div>
      {props.isLoading ? <div>Loading...</div> : <h1>{props.title.rendered}</h1>}
    </div>
  );
};

export default Episode;
