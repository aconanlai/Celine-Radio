import React, { Component } from 'react';
import { connect } from 'react-redux';
import Episode from './Episode';
import { apiPath } from '../../config';

const NotOnPageYet = () => (
  <div>no episode selected yet</div>
);

const getSlugFromPath = (path) => {
  const parts = path.split('/');
  if (parts[1] === 'episodes') {
    return parts[2];
  }
  return false;
};

class EpisodeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      isLoading: true,
      foundEpisode: false,
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
      this.fetchItem(slug);
    }
  }

  async fetchItem(slug) {
    const endpoint = `${apiPath}episodes?slug=${slug}&_embed`;
    const response = await fetch(endpoint);
    const json = await response.json();
    const item = json;
    this.setState({
      item: item[0],
      isLoading: false,
      foundEpisode: true,
    });
  }

  render() {
    return (
      this.state.foundEpisode ?
        <Episode
          {...this.state.item}
          isLoading={this.state.isLoading}
          language={this.props.language}
        />
        : <NotOnPageYet />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state._language,
  };
};

export default connect(mapStateToProps)(EpisodeContainer);
