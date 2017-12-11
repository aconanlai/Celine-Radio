import React from 'react';
import { Link } from 'react-router-dom';

const KeywordListItem = ({ keyword, }) => (
  <Link
    className="keyword-list-link"
    to={`/keywords/${keyword.id}`}
  >
    <li
      className="keyword-list-item"
      dangerouslySetInnerHTML={{
        __html: keyword.title.rendered,
      }}
    />
  </Link>
);

export default KeywordListItem;

