import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Navigation from './components/Navigation';
import Login from './components/Login'

import 'bootstrap/dist/css/bootstrap.css';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
  </Route>
);
