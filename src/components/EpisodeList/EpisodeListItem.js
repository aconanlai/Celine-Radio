import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeListItem = ({ item, }) => (
  <Link to={`/episodes/${item.slug}`}>
    <li dangerouslySetInnerHTML={{
        __html: item.content.rendered,
      }}
    />
  </Link>
);

export default EpisodeListItem;

