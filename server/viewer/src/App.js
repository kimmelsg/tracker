import React, { Component } from 'react';
import './App.css';
import socket from './socket';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    socket.on('sites', sites => this.setState({ sites }));
  }
  render() {
    let { sites = [] } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {sites.map(site => (
            <li key={site}>
              <Link to={`/${site}`}>{site}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
