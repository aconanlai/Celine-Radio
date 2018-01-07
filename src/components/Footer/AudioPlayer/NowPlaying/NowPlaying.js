import React from 'react';
import './NowPlaying.css';

const NowPlaying = (props) => {
  return (
    <div className="now-playing">
      {props.title}
    </div>
  );
};
export default NowPlaying;
