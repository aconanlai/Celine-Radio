import React, { Component } from 'react';
import EpisodeList from './EpisodeList';
import { apiPath } from '../../config';

class PodCastListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }

  async componentDidMount() {
    this.fetchItems();
  }

  async fetchItems() {
    const endpoint = `${apiPath}episodes`;
    const response = await fetch(endpoint);
    const json = await response.json();
    const items = json;
    this.setState({
      items,
    });
  }

  render() {
    return (
      <EpisodeList episodes={this.state.items} isLoading={this.state.loading} />
    );
  }
}

export default PodCastListContainer;
