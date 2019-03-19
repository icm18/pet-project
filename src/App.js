import React, { Component } from 'react';
import dog from './dog.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import MapContainer from './MapContainer'
import Signup from './Signup';
import Pet from './Pet';
import Navbar from './Navbar';

class App extends Component {
  state = {
    pets: '',
    
  }
  componentDidMount(){
    fetch('/pet')
    .then(response => response.json())
    .then(data => this.setState({pets:data}))
    

  }
  render() {
    return (
      <div className="App">
      <Router>
        <Navbar />
        
        <Route exact path="/" component={() => <MapContainer pets={this.state.pets} />} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/addlostdog" component={Pet} /> 
        {/* <MapContainer pets={this.state.pets}/> */}
      </Router>
        
     
      </div>
    );
  }
}

export default App;
