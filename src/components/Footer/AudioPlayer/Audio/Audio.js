import React, { Component } from 'react';
import { connect } from 'react-redux';
import convertElapsedTime from '../../../../timeUtils';
import { pauseAudio, } from '../../../../redux/modules/audio';
import '../ProgressBar/ProgressBar.css';

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
      this.getAudioFullDuration();
    }
    if (this.props.isPlaying !== prevProps.isPlaying) {
      this.props.isPlaying ? this.audio.play() : this.audio.pause();
    }
  }

  getAudioFullDuration = () => {
    const audioPlayer = document.getElementById('audio-podcast');
    audioPlayer.onloadedmetadata = function setDurationTime() {
      const { duration, } = audioPlayer;
      document.getElementById('full-duration').innerHTML = convertElapsedTime(duration);
    };
  }

  updateOn = () => {
    const progressBar = document.getElementById('bar');
    const handle = document.getElementById('handle');
    const { currentTime, duration, } = this.audio;
    const sizeOfBar = 200; // Still Working on a solution to scale to moblie 
    const currentSize = parseInt(currentTime * (sizeOfBar / duration), 10);
    handle.style.width = `${currentSize}px`;
    progressBar.addEventListener(
      'click',
      (e) => {
        if (!this.audio.ended) {
          const mouseX = e.pageX - progressBar.offsetLeft;
          const newTime = (mouseX * this.audio.duration) / sizeOfBar;
          this.audio.currentTime = newTime;
          handle.style.width = `${mouseX}px`;
        }
      },
      false
    );
    if (this.audio.ended) {
      this.props.pauseAudio();
      this.audio.currentTime = 0;
    }
    document.getElementById('current-time').innerHTML = convertElapsedTime(currentTime);
  };
  render() {
    return (
      <div>
        <audio
          id="audio-podcast"
          onTimeUpdate={this.updateOn}
          ref={audio => {
            this.audio = audio;
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state._audio.isPlaying,
    filePath: state._audio.filePath,
  };
};

export default connect(mapStateToProps, { pauseAudio, })(Audio);
