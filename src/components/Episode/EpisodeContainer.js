import React, { Component } from 'react';
import { connect } from 'react-redux';
import Episode from './Episode';
import { apiPath } from '../../config';

import {
  loadNewFile
} from '../../redux/modules/audio';

const NotOnPageYet = () => (
  <div>no episode selected yet</div>
);

const getSlugFromPath = (path) => {
  const parts = path.split('/');
  if (parts[3] === 'episodes') {
    return parts[4];
  }
  return false;
};

class EpisodeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      foundEpisode: false,
      selectedShowName: '',
    };
  }

  async componentDidMount() {
    this.findAndLoadData();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url) {
      this.findAndLoadData();
    }
  }

  findAndLoadData() {
    const slug = getSlugFromPath(this.props.match.url);
    if (slug) {
      this.findShowName();
      this.fetchShow(slug);
    }
  }

  findShowName() {
    const showsFound = this.props.shows.length > 0;
    if (!showsFound) {
      setTimeout(this.findShowName, 100);
      return;
    }
    const selectedShowName = this.props.shows.length > 0 ? this.props.shows.find((show) => {
      return show.slug === this.props.selectedShow;
    }).name : '';
    this.setState({
      selectedShowName,
      selectedShowSlug: this.props.selectedShow,
    });
  }

  async fetchShow(slug) {
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
    selectedShow: state._shows.selectedShow,
  };
};

export default connect(mapStateToProps, { loadNewFile, })(EpisodeContainer);
