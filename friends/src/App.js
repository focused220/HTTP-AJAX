import React, { Component } from 'react';
import './App.css';
import DisplayFriends from './DisplayFriends'

class App extends Component {
  render() {
    return (
      <div className="friends">
      <DisplayFriends />
      </div>
    )
  }
}

export default App;
