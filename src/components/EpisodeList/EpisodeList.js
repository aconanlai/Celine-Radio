import React from 'react';
import EpisodeListItem from './EpisodeListItem';
import { scrollToShowLinks } from '../../utils/scrollerTo';

const checkIfImageExists = (data) => {
  try {
    const image = data.acf.show_image.sizes;
    // const width = Math.min(400, image['medium_large-width']);
    // const ratio = image['medium_large-width'] / image['medium_large-height'];
    // const height = Math.floor(width * ratio);
    return {
      url: image.medium_large,
      // width,
      // height,
      // ratio,
    };
  } catch (e) {
    return false;
  }
};

const KeywordsDisplay = (props) => {
  return (
    <div className="show-keywords">
      {
        props.acf.related_keywords.map((keyword) => {
          const keywordProperties = props.keywords[keyword];
          return (
            <a
              onClick={() => { props.selectKeyword(keyword); scrollToShowLinks(); }}
              key={keywordProperties.slug}
              className="show-keyword"
            >
              {props.language === 'en' ? keywordProperties.name : keywordProperties.acf.french_title || keywordProperties.name}
            </a>
          );
        })
      }
    </div>
  );
};

const EpisodeList = (props) => {
  const image = checkIfImageExists(props);
  return (
    <div className="show-container">
      <h1 className="show-name">
        {props.name}
      </h1>
      {image &&
        <div
          className="show-image-container"
          style={{
          }}
        >
          <img
            className="show-image"
            src={image.url}
            alt={props.name}
          />
        </div>}
      <div
        className="show-description"
        dangerouslySetInnerHTML={{
          __html: props.language === 'en' ? props.description : (props.acf && props.acf.french_description) || props.description,
        }}
      />
      Keywords:
      {
        props.acf &&
        props.acf.related_keywords &&
        Object.keys(props.keywords).length > 0 &&
        <KeywordsDisplay {...props} />
      }
      <h2 className="episodes-label">Episodes:</h2>
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
