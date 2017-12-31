import React from 'react';
import './Panel.css';

const Panel = (props) => {
  return (
    <div className={'panel ' + props.panelClassName}>
      {props.children}
    </div>
  );
};

export default Panel;
