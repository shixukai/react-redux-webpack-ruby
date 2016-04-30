import React from 'react';
import { Route, hashHistory, IndexRoute } from 'react-router';
import {
  App,
  Contact,
  About,
  NotFound
} from 'components';
import {
  Home,
  Login
} from 'containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
    <Route path='*' component={NotFound} />
  </Route>
);
