import React, { Component } from 'react';
import { connect } from 'react-redux';
import convertElapsedTime from '../../../../timeUtils';
import { pauseAudio } from '../../../../redux/modules/audio';
import '../ProgressBar/ProgressBar.css';

class Audio extends Component {
  componentDidMount() {
    if (this.props.isPlaying) {
      this.audio.src = this.props.filePath;
      this.audio.play();
    }
    this.handle = document.getElementById('handle');
    this.progressBar = document.getElementById('bar');
    this.progressBar.addEventListener(
      'click',
      (e) => {
        if (!this.audio.ended) {
          const sizeOfBar = this.progressBar.getBoundingClientRect().width;
          const mouseX = e.pageX - this.progressBar.offsetLeft;
          const newTime = (mouseX * this.audio.duration) / sizeOfBar;
          this.audio.currentTime = newTime;
          this.handle.style.width = `${mouseX}px`;
        }
      },
      false
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.filePath !== prevProps.filePath) {
      this.audio.src = this.props.filePath;
      this.getAudioFullDuration();
      this.audio.play();
    }
    if (this.props.isPlaying !== prevProps.isPlaying) {
      this.props.isPlaying ? this.audio.play() : this.audio.pause();
    }
  }

  getAudioFullDuration = () => {
    this.audio.onloadedmetadata = () => {
      const { duration, } = this.audio;
      document.getElementById('full-duration').innerHTML = convertElapsedTime(duration);
    };
  }

  updateOn = () => {
    const { currentTime, duration, } = this.audio;
    const sizeOfBar = this.progressBar.getBoundingClientRect().width;
    const currentSize = parseInt(currentTime * (sizeOfBar / duration), 10);
    this.handle.style.width = `${currentSize}px`;
    if (this.audio.ended) {
      this.props.pauseAudio();
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
