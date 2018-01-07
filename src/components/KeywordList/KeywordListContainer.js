import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import KeywordList from './KeywordList';
import { fetchKeywords, selectKeyword } from '../../redux/modules/keywords';

class KeywordListContainer extends Component {
  async componentDidMount() {
    this.props.fetchKeywords();
  }

  render() {
    return (!this.props.isFetching
        && <KeywordList {...this.props} />
    );
  }
}

const getKeywords = state => state._keywords.keywords;

const getKeywordsArray = createSelector(
  [getKeywords],
  (keywords) => {
    return Object.values(keywords);
  }
);

const mapStateToProps = (state) => {
  return {
    language: state._language,
    keywords: getKeywordsArray(state),
    isFetching: state._keywords.isFetching,
    selectedKeyword: state._keywords.selectedKeyword,
  };
};

export default connect(mapStateToProps, { fetchKeywords, selectKeyword, })(KeywordListContainer);
