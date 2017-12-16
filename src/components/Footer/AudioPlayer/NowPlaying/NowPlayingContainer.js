import React from 'react';
import { connect } from 'react-redux';
import NowPlaying from './NowPlaying';

const NowPlayingContainer = (props) => {
  return (
    <NowPlaying
      title={props.title}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    filePath: state._audio.filePath,
    title: state._audio.title,
  };
};

export default connect(mapStateToProps)(NowPlayingContainer);
