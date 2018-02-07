import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ShowList from './ShowList';
import { fetchShows } from '../../redux/modules/shows';
import { getShowSlugFromPath } from '../../utils/pathSplitter';

class ShowListContainer extends Component {
  componentDidMount() {
    this.props.fetchShows();
  }

  render() {
    const viewedShowSlug = getShowSlugFromPath(this.props.match.url);
    return (!this.props.isFetching
        && <ShowList {...this.props} viewedShowSlug={viewedShowSlug} />
    );
  }
}

const getShowsArray = state => state._shows.showsArray;
const getSelectedKeyword = state => state._keywords.selectedKeyword;

const getVisibleShows = createSelector(
  [getShowsArray, getSelectedKeyword],
  (showsArray, selectedKeyword) => {
    return selectedKeyword === -1 ? showsArray :
      showsArray.filter((show) => {
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
