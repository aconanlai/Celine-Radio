import React, { Component } from 'react';
import { connect } from 'react-redux';
import KeywordList from './KeywordList';
import { fetchKeywords } from '../../redux/modules/keywords';

class KeywordListContainer extends Component {
  async componentDidMount() {
    this.props.fetchKeywords();
  }

  render() {
    return (!this.props.isFetching
        && <KeywordList keywords={this.props.keywords} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    keywords: state._keywords.keywords,
    isFetching: state._keywords.isFetching,
  };
};

export default connect(mapStateToProps, { fetchKeywords, })(KeywordListContainer);
