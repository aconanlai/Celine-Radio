import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchEpisodes } from '../../redux/modules/episodes';
import { selectShow } from '../../redux/modules/shows';
import EpisodeList from './EpisodeList';

const NotOnPageYet = () => (
  <div>no show selected yet</div>
);

const getSlugFromPath = (path) => {
  const parts = path.split('/');
  if (parts[1] === 'shows') {
    return parts[2];
  }
  return false;
};

class EpisodeListContainer extends Component {
  async componentDidMount() {
    this.findAndLoadData();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url) {
      this.findAndLoadData();
    }
  }

  findAndLoadData() {
    const show = getSlugFromPath(this.props.match.url);
    if (show) {
      this.props.selectShow(show);
      this.props.fetchEpisodes(show);
    }
  }

  render() {
    return this.props.selectedShow === null ? <NotOnPageYet /> :
    <EpisodeList episodes={this.props.episodes} />;
  }
}

const getShowEpisodes = state => state._episodes.shows;
const getSelectedShow = state => state._shows.selectedShow;

const getSelectedShowEpisodes = createSelector(
  [getShowEpisodes, getSelectedShow],
  (showEpisodes, selectedShow) => {
    return showEpisodes[selectedShow] || [];
  }
);

const mapStateToProps = (state) => {
  return {
    episodes: getSelectedShowEpisodes(state),
    selectedShow: state._shows.selectedShow,
    isFetching: state._episodes.isFetching,
  };
};

export default connect(mapStateToProps, { fetchEpisodes, selectShow, })(EpisodeListContainer);

