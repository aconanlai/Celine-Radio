import React, { Component } from 'react';

class Audio extends Component {
  constructor(props) {
    super(props);
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.isPlaying !== nextProps.isPlaying) {
      this.props.isPlaying ? this.audio.pause() : this.audio.play();
    }
  }
  render() {
    return (
      <audio
        src={this.props.podcastFile}
        ref={(audio) => { this.audio = audio; }}
      />
    );
  }
}

export default Audio;
