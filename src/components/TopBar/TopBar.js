import React, { Component } from 'react';
import { scrollTo } from '../../utils/scrollerTo';
import './TopBar.css';

const NavItem = props => (
  <li
    className={(props.inScope === props.id) ? 'nav-item selected' : 'nav-item'}
  >
    <a
      onClick={(e) => {
        e.preventDefault();
        scrollTo(props.className);
      }}
      onKeyPress={() => scrollTo(props.className)}
      role="link"
      tabIndex={0}
    >
      {props.id}
    </a>
  </li>
);

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        id: 'keywords',
        className: 'keyword-list',
        position: 0,
      }, {
        id: 'shows',
        className: 'show-list',
        position: 0,
      }, {
        id: 'episodes',
        className: 'episode-list',
        position: 0,
      }, {
        id: 'episode',
        className: 'episode',
        position: 0,
      }],
      inScope: null,
    };
  }

  componentDidMount() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.initializeListeners();
    }
  }

  initializeListeners() {

  }

  render() {
    return (
      <div className="top-bar">
        <ul className="nav-list">
          {this.state.items.map((item) => {
            return (
              <NavItem
                {...item}
                selecinScopeted={this.state.inScope}
                key={item.id}
              />
            );
          })}
        </ul>
      </div>);
  }
}

export default TopBar;
