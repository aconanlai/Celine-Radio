import React, { Component } from 'react';
import { connect } from 'react-redux';
import NowPlaying from './NowPlaying';
import './NowPlaying.css';

class NowPlayingContainer extends Component {
  render() {
    return (
      <NowPlaying
        filePath={this.props.filePath}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filePath: state._audio.filePath,
  };
};
export default connect(mapStateToProps)(NowPlayingContainer);