import React, { Component } from 'react';
// import './List.css';

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
        this is the list
        {this.state.items.map((item) => {
          return (
            <div>
              <h1>{item.title.rendered}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.content.rendered
                }}
              />
            </div>
          )
        })}
      </div>
    );
  }
}

export default List;
