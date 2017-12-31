import React from 'react';
import EpisodeListItem from './EpisodeListItem';

const EpisodeList = (props) => {
  return (
    <div>
      <h1 className="show-name">
        {props.name}
      </h1>
      <div
        className="episode-description"
        dangerouslySetInnerHTML={{
          __html: props.language === 'en' ? props.description : props.acf.french_description || props.description,
        }}
      />
      <ul>
        {props.episodes.map((episode) => {
          return (<EpisodeListItem
            key={episode.id}
            item={episode}
            selectedShow={props.selectedShow}
          />);
        })}
      </ul>
    </div>
  );
}

export default EpisodeList;
