import React from 'react';
import ReactDOM from 'react-dom';
import { App, Contact, About } from './components/index';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const routes = [
  <Route path="/" component={App}>
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
  </Route>
]

ReactDOM.render((
  <Router routes={routes} history={hashHistory}>
  </Router>
), document.getElementById('rootAppContainer'));
