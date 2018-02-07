import React, { Component } from 'react';
import { connect } from 'react-redux';
import Episode from './Episode';
import { apiPath } from '../../config';
import { selectEpisode, selectShow } from '../../redux/modules/shows';
import { getShowSlugFromPath, getEpisodeSlugFromPath } from '../../utils/pathSplitter';

import {
  loadNewFile
} from '../../redux/modules/audio';

const NotOnPageYet = () => (
  <div>Please select an episode to start listening! 😛</div>
);

class EpisodeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      foundEpisode: false,
      selectedShowName: '',
      selectedShowSlug: '',
    };
    this.findShowName = this.findShowName.bind(this);
    this.findShowFromId = this.findShowFromId.bind(this);
  }

  componentDidMount() {
    const isEpisodePage = this.findSlug();
    if (!isEpisodePage && !getShowSlugFromPath(this.props.match.url)) {
      this.findRandom();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url) {
      this.findSlug();
    }
    if (prevProps.selectedEpisode !== this.props.selectedEpisode) {
      this.fetchShow();
    }
  }

  findSlug() {
    const slug = getEpisodeSlugFromPath(this.props.match.url);
    if (slug) {
      this.props.selectEpisode(slug);
      this.findShowName();
      return true;
    }
    return false;
  }

  findShowName() {
    const isShowsFound = this.props.showsArray.length > 0;
    const { selectedShow, } = this.props;
    if (!isShowsFound) {
      // wait until shows have arrived from server
      setTimeout(this.findShowName, 100);
      return;
    }
    if (selectedShow) {
      const selectedShowName = this.props.shows[selectedShow].name;
      this.props.selectShow(selectedShow);
      this.setState({
        selectedShowName,
        selectedShowSlug: selectedShow,
      });
    }
  }

  async fetchShow() {
    const slug = this.props.selectedEpisode;
    const endpoint = `${apiPath}episodes?slug=${slug}&_embed`;
    const response = await fetch(endpoint);
    const json = await response.json();
    const item = json;
    this.setState({
      data: item[0],
      isLoading: false,
      foundEpisode: true,
    });
  }

  async findRandom() {
    const endpoint = `${apiPath}episodes?filter[taxonomy]=show&filter[orderby]=rand&per_page=1`;
    const response = await fetch(endpoint);
    const json = await response.json();
    const item = json[0];
    if (item.show[0]) {
      this.findShowFromId(item.show[0]);
    }
    this.setState({
      data: item,
      isLoading: false,
      foundEpisode: true,
    });
  }

  async findShowFromId(id) {
    const isShowsFound = this.props.showsArray.length > 0;
    if (!isShowsFound) {
      // wait until shows have arrived from server
      setTimeout(() => {
        this.findShowFromId(id);
      }, 100);
      return;
    }
    const foundShow = this.props.showsArray.find((show) => {
      return show.id === id;
    });
    const { slug, name, } = foundShow;
    this.setState({
      selectedShowSlug: slug,
      selectedShowName: name,
    });
  }

  render() {
    return (
      this.state.foundEpisode ?
        <Episode
          {...this.state.data}
          isLoading={this.state.isLoading}
          {...this.props}
          selectedShowName={this.state.selectedShowName}
          selectedShowSlug={this.state.selectedShowSlug}
        />
        : <NotOnPageYet />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state._language,
    shows: state._shows.shows,
    showsArray: state._shows.showsArray,
    selectedShow: state._shows.selectedShow,
    selectedEpisode: state._shows.selectedEpisode,
  };
};

export default connect(
  mapStateToProps,
  { loadNewFile, selectEpisode, selectShow, }
)(EpisodeContainer);
