import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToEpisodeList } from '../../utils/scrollerTo';

const ShowListItem = ({ show, viewedShowSlug, }) => (
  <Link
    onClick={scrollToEpisodeList}
    className={`show-list-link${viewedShowSlug === show.slug ? ' selected' : ''}`}
    to={`/shows/${show.slug}`}
  >
    <li
      className="show-list-item"
      dangerouslySetInnerHTML={{
        __html: show.name,
      }}
    />
  </Link>
);

export default ShowListItem;


