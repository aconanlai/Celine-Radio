import React from 'react';
import KeywordListItem from './KeywordListItem';
import './KeywordList.css';

const KeywordList = props => (
  <div className="list">
    <ul>
      <KeywordListItem
        key="all-shows"
        keyword={{
          id: -1,
          name: 'all',
          acf: {
            french_title: 'tous',
          },
        }}
        selectKeyword={props.selectKeyword}
        selectedKeyword={props.selectedKeyword}
        language={props.language}
      />
      {props.keywordsArray.map((keyword) => {
        return (
          <KeywordListItem
            key={keyword.id}
            keyword={keyword}
            selectKeyword={props.selectKeyword}
            selectedKeyword={props.selectedKeyword}
            language={props.language}
          />);
      })}
    </ul>
  </div>
);

export default KeywordList;
