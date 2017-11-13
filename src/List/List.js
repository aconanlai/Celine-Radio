import React, { Component } from 'react';
import Item from '../item/item.js';

const apiPath = 'http://celinebureau.info/radio/wp-json/wp/v2/posts'

// individual show path = http://celinebureau.info/radio/wp-json/wp/v2/posts?slug=two-hungry-children-episode-1

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    }
  }

  async componentDidMount() {
    const response = await fetch(apiPath)
    const json = await response.json();
    this.setState({
      items: json,
    })
  }

  render() {
    return (
      <div className="List">
        <ul>
          {this.state.items.map((item) => {
            return (<Item key={item.slug} item={item} />)
          })}
        </ul>

      </div>
    );
  }
}

export default List;
