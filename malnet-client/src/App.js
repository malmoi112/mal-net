import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
