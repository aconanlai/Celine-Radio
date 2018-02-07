import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { scrollTo } from '../../utils/scrollerTo';
import { hideLogo, setMobileStatus } from '../../redux/modules/ui';
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
      {props.language === 'en' ? props.id : props.french}
    </a>
  </li>
);

class TopBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timeMounted: new Date().getTime(),
      // items: [{
      //   id: 'keywords',
      //   className: 'keyword-list',
      //   position: 0,
      // }, {
      //   id: 'shows',
      //   className: 'show-list',
      //   position: 0,
      // }, {
      //   id: 'episodes',
      //   className: 'episode-list',
      //   position: 0,
      // }, {
      //   id: 'episode',
      //   className: 'episode',
      //   position: 0,
      // }],
      items: [{
        id: 'keywords',
        french: 'mots clés',
        className: 'keyword-list',
        position: 0,
      }, {
        id: 'shows',
        french: 'émissions',
        className: 'show-list',
        position: 0,
      }, {
        id: 'episodes',
        className: 'episode-list',
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
      if (this.props.isMobile &&
        !this.props.isLogoHidden &&
        this.state.timeMounted < (new Date().getTime() - 5000)) {
        this.props.hideLogo();
      }
    }, 100);
  }

  componentDidMount() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.props.setMobileStatus();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isMobile !== this.props.isMobile && this.props.isMobile === true) {
      this.initializeListeners();
    }
  }

  initializeListeners() {
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
    window.addEventListener('resize', this.debouncedGetPositions);
    document.addEventListener('scroll', this.debouncedGetPositions);
  }

  render() {
    return (
      <div className="top-bar">
        <ul className="nav-list">
          {this.state.items.slice(0, 2).map((item) => {
            return (
              <NavItem
                {...item}
                language={this.props.language}
                inScope={this.state.inScope === item.id}
                key={item.id}
              />
            );
          })}
        </ul>
      </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state._ui.isMobile,
    language: state._language,
    isLogoHidden: state._ui.isLogoHidden,
  };
};

export default connect(mapStateToProps, { hideLogo, setMobileStatus, })(TopBar);
