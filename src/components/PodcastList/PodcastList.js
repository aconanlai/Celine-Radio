import React, { Component } from 'react';
import Podcast from '../Podcast/Podcast.js';

class PodcastList extends Component {
  constructor(props) {
    super(props);
    // We are not sure of state here at the moment 
    
  }
  render() {
    return (
      <div className="List">
        <ul>
          {this.props.podcasts.map((podcast) => {
            return (<Podcast key={podcast.slug} items={podcast} />)
          })}
        </ul>

      </div>
    );
  }
}

export default PodcastList;
