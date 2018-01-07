import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ShowList from './ShowList';
import { fetchShows } from '../../redux/modules/shows';

class ShowListContainer extends Component {
  async componentDidMount() {
    this.props.fetchShows();
  }

  render() {
    return (!this.props.isFetching
        && <ShowList {...this.props} />
    );
  }
}

const getShows = state => state._shows.shows;
const getSelectedKeyword = state => state._keywords.selectedKeyword;

const getVisibleShows = createSelector(
  [getShows, getSelectedKeyword],
  (shows, selectedKeyword) => {
    return shows.filter((show) => {
      return show.acf.related_keywords.includes(selectedKeyword);
    });
  }
);

const mapStateToProps = (state) => {
  return {
    language: state._language,
    shows: getVisibleShows(state),
    isFetching: state._shows.isFetching,
    keywords: state._keywords.keywords,
    selectedKeyword: state._keywords.selectedKeyword,
  };
};

export default connect(mapStateToProps, { fetchShows, })(ShowListContainer);
