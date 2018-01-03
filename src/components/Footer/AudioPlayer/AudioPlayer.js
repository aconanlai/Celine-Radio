import React from 'react';
import ToggleButtonContainer from './ToggleButton/ToggleButtonContainer';
import NowPlayingContainer from '../AudioPlayer/NowPlaying/NowPlayingContainer';
import ProgressBarContainer from '../AudioPlayer/ProgressBar/ProgressBarContainer';
import Audio from './Audio/Audio';
import './AudioPlayer.css';

const AudioPlayer = (props) => {
  return (
    <div className="audio-player">
      {props.filePath &&
        <div className="audio-player" >
          <ToggleButtonContainer />
          <ProgressBarContainer />
          <NowPlayingContainer />
          <Audio />
        </div>
      }
    </div>
  );
};

export default AudioPlayer;
