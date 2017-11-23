import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import './AudioSource.css';

class AudioSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMuted: true,
    };

    this.mute = () => {
      if (this.state.isMuted) {
        this.setState({ isMuted: false, });
        this.audio.muted = true;
      } else {
        this.setState({ isMuted: true, });
        this.audio.muted = false;
      }
    };
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps.isPlaying !== this.props.isPlaying) {
      this.props.isPlaying ? this.audio.pause() : this.audio.play();
    }
  }
  render() {
    return (
      <div className={'mute'}>
        <i onClick={this.mute}  className={this.state.isMuted ? 'fa fa-volume-up' : 'fa fa-volume-off'}></i>
        <audio src={this.props.audioPath} ref={(audio) => { this.audio = audio }} />
      </div >
    );
  }
}

export default AudioSource;

// fa-volume-up 
// fa-volume-off
