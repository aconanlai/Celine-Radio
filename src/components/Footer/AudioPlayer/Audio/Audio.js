import React, { Component } from 'react';
import { connect } from 'react-redux';
import convertElapsedTime from '../../../../convertElaspedTime';
import '../ProgressBar/ProgressBar.css';

const canvasWidth = 400;

class Audio extends Component {
  componentDidMount() {
    if (this.props.isPlaying) {
      this.audio.src = this.props.filePath;
      this.audio.play();
    }
  }
  componentDidUpdate(prevProps) {
    const durationTime = document.getElementById('podcast-id-audio');
    const canvas = document.getElementById('progress').getContext('2d');
    durationTime.onloadedmetadata = function setDurationTime() {
      const { duration, } = durationTime;
      document.getElementById('full-duration').innerHTML = convertElapsedTime(duration)
      canvas.fillRect(0, 0, canvasWidth, 50);
    };

    if (this.props.filePath !== prevProps.filePath) {
      this.audio.src = this.props.filePath;
      this.audio.play();
    }
    if (this.props.isPlaying !== prevProps.isPlaying) {
      this.props.isPlaying ? this.audio.play() : this.audio.pause();
    }
  }
  render() {
    const updateOn = () => {
      const theCurrentTime = this.audio.currentTime;
      const canvas = document.getElementById('progress').getContext('2d');
      const { duration, } = this.audio;
      const percentage = theCurrentTime / duration;
      const progress = (canvasWidth * percentage);
      canvas.clearRect(0, 0, canvasWidth, 50);
      canvas.fillStyle = '#000';
      canvas.fillRect(0, 0, canvasWidth, 50);
      canvas.fillStyle = '#FF0000';
      canvas.fillRect(0, 0, progress, 50);
      document.getElementById('current-time').innerHTML = convertElapsedTime(theCurrentTime);
    };
    return (
      <div>
        <audio
          id="podcast-id-audio"
          onTimeUpdate={updateOn}
          ref={(audio) => { this.audio = audio; }}
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

export default connect(mapStateToProps)(Audio);