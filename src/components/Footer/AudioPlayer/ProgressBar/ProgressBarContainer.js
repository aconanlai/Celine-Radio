import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';

class ProgressBarContainer extends Component {
  componentDidMount() {
  };

  render() {
    return (
      <ProgressBar filePath={this.props.filePath} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filePath: state._audio.filePath,
  };
};

export default connect(mapStateToProps)(ProgressBarContainer);
