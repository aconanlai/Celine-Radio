import React from 'react';
import EpisodeListItem from './EpisodeListItem';

const KeywordsDisplay = (props) => {
  return (
    <div className="show-keywords">
      {
        props.acf.related_keywords.map((keyword) => {
          return (
            <li>
              {props.language === 'en' ? props.keywords[keyword].name : props.keywords[keyword].acf.french_title || props.keywords[keyword].name}
            </li>
          );
        })
      }
    </div>
  );
};

const EpisodeList = (props) => {
  return (
    <div>
      <h1 className="show-name">
        {props.name}
      </h1>
      <div
        className="show-description"
        dangerouslySetInnerHTML={{
          __html: props.language === 'en' ? props.description : props.acf.french_description || props.description,
        }}
      />
      {
        props.acf &&
        props.acf.related_keywords &&
        Object.keys(props.keywords).length > 0 &&
        <KeywordsDisplay {...props} />
      }
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
