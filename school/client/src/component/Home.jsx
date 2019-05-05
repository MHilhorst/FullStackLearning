import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import '../style.css';
import Search from './Search';
const Bootstrap = require('react-bootstrap');

const Navbar = Bootstrap.Navbar;
const Nav = Bootstrap.Nav;
const NavDropdown = Bootstrap.NavDropdown;
const Modal = Bootstrap.Modal;
const Form = Bootstrap.Form;
const Button = Bootstrap.Button;

class Home extends Component {
  constructor(){
    super();
    this.state = {
      listings: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    fetch(`http://localhost:5000/api/listings/${data.get('location')}`, {
      method:"GET"
    }).then(response => response.json().then(data => {
      console.log(data);
      this.setState({listings:data});
    }));
  };
  render() {
    return(
  <header class="masthead">
  <div class="container h-50">
    <div class="row h-100 align-items-center">
      <div class="col-md-7  mx-auto text-center">
        <h1 className="title mb-4">
          Find your roommate
        </h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control name="location" placeholder="Zoek een huis in..." />
            </Form.Group>
          </Form>
          {this.state.listings.length > 0 && <Redirect to={{
            pathname: '/search',
            state: { listings: this.state.listings }
          }} ></Redirect>}
      </div>
    </div>
  </div>
</header>

    );
  }
}

export default Home;
