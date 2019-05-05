import React from 'react';
import Joke from './component/Joke';
function App() {
  return (
    <React.Fragment>
      <Joke info={{question:"1",punchLine:"1"}}/>
      <Joke info={{question:"12132",punchLine:"23115251"}}/>
      <Joke info={{question:"adasdsdsad",punchLine:"asdasdadsad211"}}/>
      <Joke info={{punchLine:"asxz",question:"asdsad"}}/>
      <Joke info={{question:"xcbvcbnn",punchLine:"sdfsdfdsf"}}/>
      </React.Fragment>
);
}

export default App;
