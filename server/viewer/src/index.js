import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/home';
import Site from './views/site';
import Session from './views/session';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/view" exact component={Home} />
      <Route path="/view/site/:site" component={Site} />
      <Route path="/view/session/:id" component={Session} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
