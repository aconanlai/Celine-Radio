import React from 'react';
import EpisodeListItem from './EpisodeListItem';

const EpisodeList = props => (
  <div className="List">
    <ul>
      {props.episodes.map((episode) => {
        return (<EpisodeListItem key={episode.slug} item={episode} />);
      })}
    </ul>
  </div>
);

export default EpisodeList;
