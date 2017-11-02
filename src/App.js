import React, { Component } from 'react';
import PodcastList from './components/PodcastList/PodcastList';
import Footer from './components/Footer/Footer';

const apiPath = 'http://celinebureau.info/radio/wp-json/wp/v2/posts';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await fetch(apiPath);
    const json = await response.json();
    const items = json;
    this.setState({
      items,
    });
  }

  render() {
    return (
      <div className="App">
        <PodcastList podcasts={this.state.items} isLoading={this.state.loading} />  
        <Footer /> 
      </div>
    );
  }
}

export default App;
