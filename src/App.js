import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './MapContainer'
import Signup from './Signup';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
        <MapContainer />
      </div>
    );
  }
}

export default App;
