import React, { Component } from 'react';
import { connect } from 'react-redux';

class Audio extends Component {
  componentDidMount() {
    if (this.props.isPlaying) {
      this.audio.src = this.props.filePath;
      this.audio.play();
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.filePath !== prevProps.filePath) {
      this.audio.src = this.props.filePath;
      this.audio.play();
    }
    if (this.props.isPlaying !== prevProps.isPlaying) {
      this.props.isPlaying ? this.audio.play() : this.audio.pause();
    }
  }
  render() {
    return (
      <audio
        ref={(audio) => { this.audio = audio; }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state._audio.isPlaying,
    filePath: state._audio.filePath,
  };
};

export default connect(mapStateToProps)(Audio);
