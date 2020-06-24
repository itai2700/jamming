import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/PlayList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: 'name1', artist: 'artist1', album: 'album1', id: '1' },
        { name: 'name2', artist: 'artist2', album: 'album2', id: '2' },
        { name: 'name3', artist: 'artist3', album: 'album3', id: '3' },
      ],
      playlistName: 'playListName',
      PlaylistTracks: [
        { name: 'name1', artist: 'artist1', album: 'album1', id: '4' },
        { name: 'name1', artist: 'artist1', album: 'album1', id: '5' },
        { name: 'name1', artist: 'artist1', album: 'album1', id: '6' },
      ],
    };
  }

  //Checks if the received track is already in the playlist if it doesn't - it will
  //add it to the playlist

  addTrack = (track) => {
    let tracks = this.state.PlaylistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ PlaylistTracks: tracks });
  };

  // This function gets passed to the Track.js component,
  // it gets called after clicking on the "-" sign, when called,
  // it checks if the track id that was clicked exists in
  // the playlistTrack state, if it does - it will remove the track from the state

  removeTrack = (track) => {
    let PlaylistTracks = this.state.PlaylistTracks;
    PlaylistTracks = PlaylistTracks.filter( currenTrack => currenTrack.id !== track.id);
    this.setState({ PlaylistTracks});
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          <SearchBar />
          <div className='App-playlist'>
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              PlaylistTracks={this.state.PlaylistTracks}
              removeTrack={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
