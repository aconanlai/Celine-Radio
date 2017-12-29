import React from 'react';

const KeywordListItem = ({
  language, keyword, selectKeyword, selectedKeyword,
}) => (
  <a
    onClick={() => { selectKeyword(keyword.id); }}
    className="keyword-list-link"
  >
    <li
      className={`keyword-list-item${selectedKeyword === keyword.id ? ' selected' : ''}`}
      dangerouslySetInnerHTML={{
        __html: language === 'en' ? keyword.name : keyword.acf.french_title,
      }}
    />
  </a>
);

export default KeywordListItem;

