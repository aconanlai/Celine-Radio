import React from 'react';
import ShowListItem from './ShowListItem';
import './ShowList.css';

const ShowList = (props) => {
  let keywordName;
  try {
    const foundKeyword = props.keywords[props.selectedKeyword];
    keywordName = props.language === 'en' ? foundKeyword.name : foundKeyword.acf.french_title || foundKeyword.name;
  } catch (e) {
    keywordName = null;
  }
  return (
    <div>
      {keywordName &&
        <div className="browsing-keyword">
          Browsing:
        <span className="keyword-name">
          {keywordName}
        </span>
        </div>
      }
      <ul>
        {props.shows.map((show) => {
          return (
            <ShowListItem
              key={show.id}
              show={show}
              viewedShowSlug={props.viewedShowSlug}
            />);
        })}
      </ul>
    </div>);
};

export default ShowList;
