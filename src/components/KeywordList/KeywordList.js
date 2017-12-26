import React from 'react';
import KeywordListItem from './KeywordListItem';
import './KeywordList.css';

const KeywordList = props => (
  <div className="list">
    <ul>
      {props.keywords.map((keyword) => {
        return (
          <KeywordListItem
            key={keyword.id}
            keyword={keyword}
            selectKeyword={props.selectKeyword}
            selectedKeyword={props.selectedKeyword}
          />);
      })}
    </ul>
  </div>
);

export default KeywordList;
