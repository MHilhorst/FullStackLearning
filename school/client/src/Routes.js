import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Search from "./component/Search";
export default () =>
  <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={Search} />
  </Switch>;
