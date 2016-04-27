import React from 'react';
import { Route, hashHistory, IndexRoute } from 'react-router';
import { App, Contact, About } from 'components';
import { Home } from 'containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
  </Route>
);
