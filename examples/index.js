'use strict';

import '../bower_components/bootstrap/dist/css/bootstrap.css';
import '../bower_components/bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import { default as Router, Route, Redirect, Link, RouteHandler } from 'react-router';
import Rule from './rule';

window.React = React;

class App extends React.Component {
  render () {
    return (
      <div>
        <RouteHandler />
      </div>
    )
  }
}

var routes = (
  <Route handler={App} path="/">
    <Route name="rule" handler={Rule} />
    <Redirect from="/" to="rule" />
  </Route>
);

Router.run(routes, Router.HashLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
