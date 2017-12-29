import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from './AudioPlayer';


const AudioPlayerContainer = (props) => {
  return (<AudioPlayer
    filePath={props.filePath}
  />);
};


const mapStateToProps = (state) => {
  return {
    filePath: state._audio.filePath,
  };
};

export default connect(mapStateToProps)(AudioPlayerContainer);
