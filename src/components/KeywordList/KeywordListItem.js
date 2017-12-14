import React from 'react';
import { Link } from 'react-router-dom';

const KeywordListItem = ({ keyword, selectKeyword, }) => (
  <a onClick={() => { selectKeyword(keyword.id); }}>
    <li
      className="keyword-list-item"
      dangerouslySetInnerHTML={{
        __html: keyword.title.rendered,
      }}
    />
  </a>
);

export default KeywordListItem;

