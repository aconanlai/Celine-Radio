import React from 'react';
import './Panel.css';

const Panel = (props) => {
  return (
    <div className={props.panelClassName}>
      {props.children}
    </div>
  );
};

export default Panel;