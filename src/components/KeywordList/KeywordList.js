import React from 'react';
import KeywordListItem from './KeywordListItem';

const KeywordList = props => (
  <div className="List">
    <ul>
      {props.keywords.map((keyword) => {
        return (
          <KeywordListItem
            key={keyword.id}
            keyword={keyword}
            selectKeyword={props.selectKeyword}
          />);
      })}
    </ul>
  </div>
);

export default KeywordList;
