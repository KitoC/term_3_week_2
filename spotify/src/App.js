import React, { Component } from 'react';
import logo from './spotify.png';
import Songs from './Components/Song';
import Utils    from './helperMethods'
import './App.css';
import Modal from './Components/Modal';

const { filterMany } = Utils

class App extends Component {
  state = {
    filter: '',
    focusBar: '',
    addNewSong: false,
    songs: JSON.parse(localStorage.getItem('songList')) || [{ artist: 'Kanye West', title: 'Touch the sky' }, { artist: 'Kanye West', title: 'Jesus walks' }, { artist: 'Kanye West', title: 'Gold Digger' }, { artist: 'Kanye West', title: 'Power' }, { artist: 'Kanye West', title: 'Otis' }, { artist: 'Kanye West', title: 'Homecoming' }, { artist: 'Kanye West', title: 'Black Skinhead'}]
  }

  filter = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })
  }

  setFocus = () => {
    this.setState({
    focusBar: 'focus'
    })
  }

  removeFocus = () => {
    this.setState({
      focusBar: ' '
    })
  }

  songForm = () => {
    console.log('Worked')
    this.setState({
      addNewSong: true
    })
  }

  newSong = (event) => {
    console.log(event.target.elements.title.value)
    event.preventDefault()
    this.setState({
      songs: [...this.state.songs, { title:  event.target.elements.title.value , artist:  event.target.elements.artist.value }],
      addNewSong: false
    }, ()=>{
      localStorage.setItem("songList", JSON.stringify(this.state.songs))
    })
   
  }

 

  render() {
    let modal;
    let params = this.state.filter.toLowerCase()
    const songs = this.state.songs.filter(song => (filterMany(song.title, params) || filterMany(song.artist, params)))
    if (this.state.addNewSong) {
      modal = (<Modal onSubmit={this.newSong} />);
    }
    return (
      <div className="App">
      
      <img src={logo} className="App-logo" />
        <h1>Spotifyy</h1>
        <p>Total songs: {this.state.songs.length}</p>
        {modal}
        <button onClick={this.songForm}>Add new song</button>
        <form>
          <label htmlFor="search">Search for song: </label>
          <div id="search" className={this.state.focusBar}>
            <input autoComplete="off" id="search" className="fromLeft" onChange={this.filter} onBlur={this.removeFocus} onFocus={this.setFocus} />
          </div>
        </form>
        <Songs songs={songs} />
      </div>
    );
  }
}


export default App;
