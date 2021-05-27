import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Home from './components/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Home title="Hello from React webpack" />;
  }
}

export default hot(App);
