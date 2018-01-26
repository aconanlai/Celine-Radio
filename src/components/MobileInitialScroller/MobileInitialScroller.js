import React, { Component } from 'react';
import { scrollTo } from '../../utils/scrollerTo';

class MobileInitialScroller extends Component {
  componentDidMount() {
    const { url, } = this.props.match;
    const parts = url.split('/');
    if (parts.length > 4) {
      return scrollTo('episode', 0);
    } else if (parts[1] === 'shows') {
      return scrollTo('episode-list', 0);
    }
  }

  render() {
    return null;
  }
}

export default MobileInitialScroller;
