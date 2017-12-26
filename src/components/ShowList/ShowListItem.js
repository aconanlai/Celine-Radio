import React from 'react';
import { Link } from 'react-router-dom';

const ShowListItem = ({ show, }) => (
  <Link
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

