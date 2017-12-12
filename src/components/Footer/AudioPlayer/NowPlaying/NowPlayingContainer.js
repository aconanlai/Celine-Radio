import React, { Component } from 'react';
import { connect } from 'react-redux';
import NowPlaying from './NowPlaying';
import './NowPlaying.css';

class NowPlayingContainer extends Component {
  render() {
    return (
      <NowPlaying
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filePath: state._audio.filePath,
    // Here we will import our title state
  };
};
export default connect(mapStateToProps)(NowPlayingContainer);