import React from 'react';
import ToggleButtonContainer from './ToggleButton/ToggleButtonContainer';
import NowPlayingContainer from './NowPlaying/NowPlayingContainer';
import TimeDisplay from './TimeDisplay/TimeDisplay';
import ProgressBar from './ProgressBar/ProgressBar';
import Audio from './Audio/Audio';
import './AudioPlayer.css';

const AudioPlayer = (props) => {
  return (
    <div className={`audio-player${!props.filePath ? ' hide' : ''}`} >
      <ToggleButtonContainer />
      <NowPlayingContainer />
      <TimeDisplay />
      <ProgressBar />
      <Audio />
    </div>
  );
};

export default AudioPlayer;
