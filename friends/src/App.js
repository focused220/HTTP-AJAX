import React, { Component } from 'react';
import './App.css';
import DisplayFriends from './DisplayFriends'
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="friends">
      <Router path="/"><DisplayFriends/></Router>
      </div>
    )
  }
}

export default App;
