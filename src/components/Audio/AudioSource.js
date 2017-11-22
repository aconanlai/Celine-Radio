import React, { Component } from 'react';


class AudioSource extends Component {
  constructor(props) {
    super(props);
    
  }

  componentWillReceiveProps() {
    this.props.isPlaying ? this.audio.pause() : this.audio.play()
  }

  render() {
    return (
      <div>
        <audio
          src={this.props.AudioPath}
          ref={(audio) => { this.audio = audio }}
        />
      </div>

    );
  }
}

export default AudioSource;
