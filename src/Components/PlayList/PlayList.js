import React from 'react';
import TrackList from '../TrackList/TrackList';
import './PlayList.css';



class PlayList extends React.Component {

  handlePlaylistNameChange = (e) => {
   let inputValue = e.target.value
    this.props.updatePlaylistName(inputValue)
  }


  render() {
    return (
      <div className='Playlist'>
        <input defaultValue={this.props.playlistName} onChange={this.handlePlaylistNameChange}/>
        <TrackList
          tracks={this.props.PlaylistTracks}
          removeTrack={this.props.removeTrack}
          isRemoval={true}
        />
        <button className='Playlist-save' onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default PlayList;
