import React from 'react';
import EpisodeListItem from './EpisodeListItem';

const KeywordsDisplay = (props) => {
  return (
    <div className="show-keywords">
      {
        props.acf.related_keywords.map((keyword) => {
          const keywordProperties = props.keywords[keyword];
          return (
            <li key={keywordProperties.slug}>
              {props.language === 'en' ? keywordProperties.name : keywordProperties.acf.french_title || keywordProperties.name}
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
          __html: props.language === 'en' ? props.description : (props.acf && props.acf.french_description) || props.description,
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
