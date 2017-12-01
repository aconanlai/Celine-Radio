import React, { Component } from 'react';

class Audio extends Component {
  constructor(props) {
    super(props);
    this.isAudioPlaying = this.isAudioPlaying.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isPlaying !== nextProps.isPlaying) {
      this.isAudioPlaying();
    }
  }

  isAudioPlaying() {
    if (this.props.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
  }
  render() {
    return (
      <audio
        src={this.props.podcastFile}
        ref={(audio) => { this.audio = audio; }}
      >
      </audio>
    );
  }
}


export default Audio;
