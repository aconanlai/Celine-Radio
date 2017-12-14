import React from 'react';
import './NowPlaying.css';

const NowPlaying = (props) => {
  return (
    <div className="now-playing">
      <div>
        Now Playing: {props.title}
      </div>
    </div>
  );
};
export default NowPlaying;
