import React from 'react';
import { scrollToShowLinks } from '../../utils/scrollerTo';

const KeywordListItem = ({
  language, keyword, selectKeyword, selectedKeyword,
}) => (
  <li
    className={`keyword-list-item${selectedKeyword === keyword.id ? ' selected' : ''}`}
  >
    <a
      onClick={() => { selectKeyword(keyword.id); scrollToShowLinks(); }}
      onKeyPress={() => { selectKeyword(keyword.id); scrollToShowLinks(); }}
      role="link"
      className="keyword-list-link"
      tabIndex={0}
    >
      <span
        dangerouslySetInnerHTML={{
          __html: language === 'en' ? keyword.name : keyword.acf.french_title || keyword.name,
        }}
      />
    </a>
  </li>
);

export default KeywordListItem;
