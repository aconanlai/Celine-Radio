import React from 'react';
import EpisodeListItem from './EpisodeListItem';

const EpisodeList = props => (
  <div>
    <ul>
      {props.episodes.map((episode) => {
        return (<EpisodeListItem key={episode.id} item={episode} />);
      })}
    </ul>
  </div>
);

export default EpisodeList;
