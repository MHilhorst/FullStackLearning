import React from 'react';
import './App.css';
import Items from './components/Items';
import Navigation from './components/Navigation';


function App() {
  return (
    <React.Fragment>
      <Navigation />
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <Items />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
