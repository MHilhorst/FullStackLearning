import React, { Component } from 'react';

class Joke extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <React.Fragment>
        <h1>Question {this.props.info.question}</h1>
        <p>Punchline {this.props.info.punchLine}</p>
      </React.Fragment>
    );
  }
}



export default Joke;
