import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: 'Jane Doe'
  }

  render() {
    const { name } = this.state
    return (
      <div className="App">
          <div>
            Hello { name ? name : 'Guest' }!
          </div>
      </div>
    );
  }
}

export default App;
