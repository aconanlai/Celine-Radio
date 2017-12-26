import React from 'react';

const KeywordListItem = ({ keyword, selectKeyword, selectedKeyword, }) => (
  <a
    onClick={() => { selectKeyword(keyword.id); }}
    className="keyword-list-link"
  >
    <li
      className={`keyword-list-item${selectedKeyword === keyword.id ? ' selected' : ''}`}
      dangerouslySetInnerHTML={{
        __html: keyword.name,
      }}
    />
  </a>
);

export default KeywordListItem;

