import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioPlayer from './AudioPlayer';

class AudioPlayerContainer extends Component {
  render() {
    return (
      <AudioPlayer
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

export default connect(mapStateToProps)(AudioPlayerContainer);
