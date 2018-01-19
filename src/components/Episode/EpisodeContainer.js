import React, { Component } from 'react';
import { connect } from 'react-redux';
import Episode from './Episode';
import { apiPath } from '../../config';
import { getShowSlugFromPath, getEpisodeSlugFromPath } from '../../utils/pathSplitter';

import {
  loadNewFile
} from '../../redux/modules/audio';

const NotOnPageYet = () => (
  <div>no episode selected yet</div>
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
    const slug = getEpisodeSlugFromPath(this.props.match.url);
    if (slug) {
      this.findShowName();
      this.fetchShow(slug);
    }
  }

  findShowName() {
    const isShowsFound = this.props.showsArray.length > 0;
    if (!isShowsFound) {
      // wait until shows have arrived from server
      setTimeout(this.findShowName, 100);
      return;
    }
    const selectedShow = getShowSlugFromPath(this.props.match.url);
    const selectedShowName = this.props.shows[selectedShow].name;
    this.setState({
      selectedShowName,
      selectedShowSlug: selectedShow,
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
    showsArray: state._shows.showsArray,
  };
};

export default connect(mapStateToProps, { loadNewFile, })(EpisodeContainer);
