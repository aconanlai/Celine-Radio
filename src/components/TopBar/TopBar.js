import React, { Component } from 'react';
import { scrollTo } from '../../utils/scrollerTo';
import debounce from '../../utils/debounce';
import './TopBar.css';

const NavItem = props => (
  <li
    className={props.inScope ? 'nav-item selected' : 'nav-item'}
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
    this.debouncedGetPositions = debounce(() => {
      const items = [...this.state.items];
      let inScope;
      const itemsWithNewPositions = items.map((item) => {
        const element = document.getElementsByClassName(item.className)[0];
        const { top, } = element.getBoundingClientRect();
        const halfHeight = window.innerHeight / 2;
        if (top < halfHeight) {
          inScope = item.id;
        }
        return {
          ...item,
          position: top,
        };
      });
      this.setState({
        items: itemsWithNewPositions,
        inScope,
      });
    }, 100);
  }

  componentDidMount() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.initializeListeners();
    }
  }

  initializeListeners() {
    this.debouncedGetPositions();
    window.addEventListener('resize', this.debouncedGetPositions);
    document.addEventListener('scroll', this.debouncedGetPositions);
  }

  render() {
    return (
      <div className="top-bar">
        <ul className="nav-list">
          {this.state.items.map((item) => {
            return (
              <NavItem
                {...item}
                inScope={this.state.inScope === item.id}
                key={item.id}
              />
            );
          })}
        </ul>
      </div>);
  }
}

export default TopBar;
