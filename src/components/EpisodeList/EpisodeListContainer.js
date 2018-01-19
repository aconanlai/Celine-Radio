import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchEpisodes } from '../../redux/modules/episodes';
import { selectShow } from '../../redux/modules/shows';
import { selectKeyword } from '../../redux/modules/keywords';
import { getShowSlugFromPath } from '../../utils/pathSplitter';
import EpisodeList from './EpisodeList';

const NotOnPageYet = () => (
  <div>no show selected yet</div>
);

class EpisodeListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.findShowData = this.findShowData.bind(this);
  }

  componentDidMount() {
    this.findAndLoadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url) {
      this.findAndLoadData();
    }
  }

  findAndLoadData() {
    const show = getShowSlugFromPath(this.props.match.url);
    if (show && show !== this.props.selectedShow) {
      this.props.selectShow(show);
      this.props.fetchEpisodes(show);
      this.findShowData(show);
    }
  }

  findShowData(showSlug) {
    const isShowsFound = this.props.showsArray.length > 0;
    if (!isShowsFound) {
      // wait until shows have arrived from server
      setTimeout(() => this.findShowData(showSlug), 100);
      return;
    }
    const data = this.props.shows[showSlug];
    this.setState({
      data,
    });
  }

  render() {
    return this.props.selectedShow === null ? <NotOnPageYet /> :
    <EpisodeList {...this.props} {...this.state.data} />;
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
    language: state._language,
    shows: state._shows.shows,
    showsArray: state._shows.showsArray,
    keywords: state._keywords.keywords,
    selectedShow: state._shows.selectedShow,
    isFetching: state._episodes.isFetching,
  };
};

export default connect(
  mapStateToProps,
  { fetchEpisodes, selectShow, selectKeyword, }
)(EpisodeListContainer);
