import React from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import {
  Contact,
  About,
  NotFound
} from 'components';
import {
  App,
  Home,
  Login
} from 'containers'

export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
    </Route>
    <Route path="*" component={NotFound} status={404} />
  </Router>
);
