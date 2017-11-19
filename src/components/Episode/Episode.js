import React from 'react';

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
    <div>
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
      <div
        className="episode-description"
        dangerouslySetInnerHTML={{
          __html: props.content.rendered,
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
