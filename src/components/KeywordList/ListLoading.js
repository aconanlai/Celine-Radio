import React from 'react';

const numberOfBoxes = Math.floor((Math.random() * (7)) + 10);

const ListLoadingItem = class extends React.PureComponent { // eslint-disable-line
  render() {
    const percentage = Math.floor((Math.random() * (30)) + 30);
    return (
      <div
        className="loading-box"
        style={{ width: `${percentage}%`, }}
      />
    );
  }
};

const ListLoading = class extends React.PureComponent { // eslint-disable-line
  render() {
    const arr = new Array(numberOfBoxes).fill(null);
    return (
      <div className="loading-box-container">
        {arr.map((box, i) => {
          return <ListLoadingItem key={i} />;
        })}
      </div>
    );
  }
};

export default ListLoading;
