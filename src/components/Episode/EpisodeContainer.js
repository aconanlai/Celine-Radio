import React, { Component } from 'react';
import Episode from './Episode';
import { apiPath } from '../../config';

class EpisodeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      loading: true,
    };
  }

  async componentDidMount() {
    this.fetchItem();
  }

  async fetchItem() {
    const endpoint = `${apiPath}episodes?slug=${this.props.slug}`;
    const response = await fetch(endpoint);
    const json = await response.json();
    const item = json;
    this.setState({
      item: item[0],
      loading: false,
    });
  }

  render() {
    return (
      <Episode {...this.state.item} isLoading={this.state.loading} />
    );
  }
}

export default EpisodeContainer;
