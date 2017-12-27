import React from 'react';

const scrollToShowLinks = () => {
  const classToScrollTo = document.querySelectorAll('.List')[0];
  classToScrollTo.scrollIntoView();
};

const KeywordListItem = ({ keyword, selectKeyword, selectedKeyword, }) => (
  <a
    onClick={() => { selectKeyword(keyword.id); scrollToShowLinks(); }}
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
