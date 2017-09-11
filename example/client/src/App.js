import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div className="App">
                <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                  To get started, edit <Link to="/test">src/App.js</Link> and
                  save to reload.
                </p>
              </div>
            )}
          />
          <Route
            path="/test"
            render={() => (
              <div>
                <Link to="/">hi</Link>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
