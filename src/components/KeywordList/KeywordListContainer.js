import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListLoading from './ListLoading';
import KeywordList from './KeywordList';
import { fetchKeywords, selectKeyword } from '../../redux/modules/keywords';

class KeywordListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeMounted: new Date().getTime(),
      completedLoading: false,
    };
    this.completeLoading = this.completeLoading.bind(this);
  }
  componentDidMount() {
    if (this.props.keywordsArray.length > 0) {
      this.completeLoading();
    }
    this.props.fetchKeywords();
  }

  componentDidUpdate(prevProps) {
    if ((this.props.keywordsArray !== prevProps.keywordsArray)
        && this.props.keywordsArray.length > 0) {
      const now = new Date().getTime();
      const diff = now - this.state.timeMounted - 1000;
      if (diff >= 0) {
        this.completeLoading();
      } else {
        setTimeout(this.completeLoading, Math.abs(diff));
      }
    }
  }

  completeLoading() {
    this.setState({
      completedLoading: true,
    });
  }

  render() {
    return this.state.completedLoading ? <KeywordList {...this.props} /> : <ListLoading />;
  }
}

const mapStateToProps = (state) => {
  return {
    language: state._language,
    keywordsArray: state._keywords.keywordsArray,
    selectedKeyword: state._keywords.selectedKeyword,
  };
};

export default connect(mapStateToProps, { fetchKeywords, selectKeyword, })(KeywordListContainer);
