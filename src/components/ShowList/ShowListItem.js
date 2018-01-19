import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToEpisodeList } from '../../utils/scrollerTo';

const ShowListItem = ({ show, viewedShowSlug, }) => (  
  <li
    className="show-list-item"
  >
    <Link
      onClick={scrollToEpisodeList}
      className={`show-list-link${viewedShowSlug === show.slug ? ' selected' : ''}`}
      to={`/shows/${show.slug}`}
    >
      <span
        dangerouslySetInnerHTML={{
          __html: show.name,
        }}
      />
    </Link>
  </li>
);

export default ShowListItem;
