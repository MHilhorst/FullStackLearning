import React, { Component } from 'react';
import Header from './component/Header';
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
  super(props);

    this.state = {
      isAuthenticated: false
    };
  }
  userHasAuthenticated = authenticated => {
  this.setState({ isAuthenticated: authenticated });
  }
  render(){
    return (
    <React.Fragment>
      <Header />
        <Routes />
    </React.Fragment>
  );
  }
}

export default App;
