import React from 'react';
import ShowListItem from './ShowListItem';
import './ShowList.css';

const ShowList = props => (
  <div className="List">
    <ul>
      {props.shows.map((show) => {
        return (
          <ShowListItem
            key={show.id}
            show={show}
          />);
      })}
    </ul>
  </div>
);

export default ShowList;
