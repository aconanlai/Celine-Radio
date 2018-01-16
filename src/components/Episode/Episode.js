import React from 'react';
import { Link } from 'react-router-dom';
import './Episode.css';
import { scrollToEpisodeList } from '../../utils/scrollerTo';

const Loading = () => (
  <div>Loading...</div>
);

const checkIfImageExists = (embedded) => {
  try {
    return embedded['wp:featuredmedia'][0].source_url;
  } catch (e) {
    return false;
  }
};

const EpisodeDisplay = (props) => {
  const image = checkIfImageExists(props._embedded);
  return (
    <div className="episode-page">
      <Link
        className="episode-breadcrumb-link"
        to={`/shows/${props.selectedShowSlug}`}
        onClick={scrollToEpisodeList}
      >
        {props.selectedShowName}
      </Link>
      <h1
        className="episode-title"
      >
        {props.title.rendered}
      </h1>
      {image && <img
        className="episode-image"
        src={image}
        alt={props.title.rendered}
      />}
      {
        props.acf.audio_link &&
        (<div>
          <span
            className="play-episode-link"
            onClick={
              () => { props.loadNewFile(props.acf.audio_link, props.title.rendered); }}
          >
            PLAY
          </span>
        </div>)
      }
      <div
        className="episode-description"
        dangerouslySetInnerHTML={{
          __html: props.language === 'en' ? props.content.rendered : props.acf.french_description || props.content.rendered,
        }}
      />
    </div>
  );
};

const Episode = (props) => {
  return (
    <div>
      {props.isLoading ? <Loading />
        : <EpisodeDisplay {...props} />}
    </div>
  );
};

export default Episode;
