import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile/Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to Random Profile</h1>
        </header>
        <Profile />
        
      </div>
    );
  }
}

export default App;
