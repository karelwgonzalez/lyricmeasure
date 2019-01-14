import React, { Component } from 'react';
import './App.css';
import SongTile from './SongTile.js'
import SongInfo from './SongInfo.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      info: ["No Song Selected"]
    }
  }

  updateInfo(song) {
    this.setState({info: <SongInfo SongData={song}/>});
  }

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + 'tracklist_alldata.json')
    .then(results => {
      return results.clone().json();
    }).then(data => {
      let songs = data.results.map((song) => {
        return(
          <SongTile SongData={song} onClick={this.updateInfo.bind(this, song)}/>
        )
      })
      this.setState({songs: songs});
      console.log(this.state.songs);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="display">
          <div className="song-tiles">
            <h1>#1 Pop Song Complexity By Year</h1>
            <h3>Click a tile for song information</h3>
            <div className="tiles">
              {this.state.songs}
            </div>
          </div>
          <div className="song-info">
            <h4>Song Info</h4>
            {this.state.info}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
