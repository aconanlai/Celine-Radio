import React from 'react';
import './NowPlaying.css';

const NowPlaying = (props) => {
  return (
    <div className="now-playing">
      {props.filePath &&
        <div>
          Now Playing: Jamals static coded podcast
      </div>
      }
    </div>
  );
};

export default NowPlaying;

