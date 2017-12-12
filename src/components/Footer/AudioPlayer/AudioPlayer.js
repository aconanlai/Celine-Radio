import React from 'react';
import ToggleButtonContainer from './ToggleButton/ToggleButtonContainer';
import NowPlayingContainer from '../AudioPlayer/NowPlaying/NowPlayingContainer';
import Audio from './Audio/Audio';
import './AudioPlayer.css'

const AudioPlayer = (props) => {
  console.log('YA: ' + props.filePath)
  return (
    <div className="audio-player">
      {props.filePath &&
        <div className="audio-player" >
          <ToggleButtonContainer />
          <NowPlayingContainer />
          <Audio />
        </div>
      }
    </div>
  );
};

export default AudioPlayer;
