import React from 'react';
import { scrollToShowLinks } from '../../scrollerTo';

const KeywordListItem = ({
  language, keyword, selectKeyword, selectedKeyword,
}) => (
  <a
    onClick={() => { selectKeyword(keyword.id); scrollToShowLinks(); }}
    className="keyword-list-link"
  >
    <li
      className={`keyword-list-item${selectedKeyword === keyword.id ? ' selected' : ''}`}
      dangerouslySetInnerHTML={{
        __html: language === 'en' ? keyword.name : keyword.acf.french_title || keyword.name,
      }}
    />
  </a>
);

export default KeywordListItem;
