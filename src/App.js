import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Matrix from './matrix-parallax.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Matrix />
      </div>
    );
  }
}

export default App;
