import React, { Component } from 'react';
import { connect } from 'react-redux';
import NowPlaying from './NowPlaying';
import './NowPlaying.css';

class NowPlayingContainer extends Component {
  // Note from jamal to connan: Have not made this Dynamic yet. waiting to here your reviews then after I will move onto this
  render() {
    if (this.props.src) {
      return (
        <NowPlaying
        />
      );
    }
    return null;
  }
}
const mapStateToProps = (state) => {
  return {
    src: state._audio.filePath,
  };
};
export default connect(mapStateToProps)(NowPlayingContainer);