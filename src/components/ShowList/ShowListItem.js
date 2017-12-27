import React from 'react';
import { Link } from 'react-router-dom';

const scrollToEpisodeList = () => {
  const classToScrollTo = document.querySelectorAll('.episode-list-item')[0];
  classToScrollTo.scrollIntoView();
};

const ShowListItem = ({ show, }) => (
  <Link
    onClick={() => { scrollToEpisodeList(); }}
    className="show-list-link"
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
