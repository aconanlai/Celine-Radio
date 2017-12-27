import React from 'react';
import { Link } from 'react-router-dom';
import './EpisodeList.css';

const scrollToEpisodePage = () => {
  const classToScrollTo = document.querySelectorAll('.episode-page')[0];
  classToScrollTo.scrollIntoView();
};

const EpisodeListItem = ({ item, }) => (
  <Link
    onClick={() => scrollToEpisodePage()}
    className="episode-list-link"
    to={`/episodes/${item.slug}`}
  >
    <li
      className="episode-list-item"
      dangerouslySetInnerHTML={{
        __html: item.title.rendered,
      }}
    />
  </Link>
);

export default EpisodeListItem;
