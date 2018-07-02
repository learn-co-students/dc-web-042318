import React, { Component } from 'react';
import './App.css';
import SearchBar from  './components/SearchBar';
import FeaturedMusic from './components/FeaturedMusic';
import OtherMusic from './components/OtherMusic';
import _ from 'lodash';

class App extends Component {

  constructor(){
    super();
    this.state={
      searchTerm: "Beyonce",
      featuredMusicResults: [],
      otherMusicResults: []
    }
  }

  componentDidMount(){
    this.fetchMusic();
  }

  fetchMusic = (term) => {
    this.setState({searchTerm: term});
    let url = `https://itunes.apple.com/search?limit=8&term=${this.state.searchTerm}`
    fetch(url)
    .then(response => response.json())
    .then(jsonData => {
      this.setState({
        featuredMusicResults: jsonData.results.slice(0, 3),
        otherMusicResults: jsonData.results.slice(3)
      });
    })
  }

  render() {
    let debounceFunc = _.debounce(this.fetchMusic, 200);

    return (
      <div className="App">
        <SearchBar searchHandler={debounceFunc}/>
        <FeaturedMusic featuredMusicList={this.state.featuredMusicResults}/>
        <OtherMusic otherMusicList={this.state.otherMusicResults}/>
      </div>
    );
  }
}

export default App;
