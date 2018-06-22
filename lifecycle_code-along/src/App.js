import React, { Component } from 'react';
import './App.css';
import RepoList from './Components/RepoList/RepoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RepoList user="KitoC" />
      </div>
    );
  }
}

export default App;
