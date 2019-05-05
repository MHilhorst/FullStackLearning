import React, { Component } from 'react';
import Listing from './Listing';
const Bootstrap = require('react-bootstrap');

const Navbar = Bootstrap.Navbar;
const Nav = Bootstrap.Nav;
const NavDropdown = Bootstrap.NavDropdown;
const Modal = Bootstrap.Modal;
const Form = Bootstrap.Form;
const Button = Bootstrap.Button;

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
        listings : []
    };
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
    console.log(this.state.listings);
    return(
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control name="location" placeholder="Zoek een huis in..." />
          </Form.Group>
        </Form>
        {this.state.listings.length > 0 && <Listing listing={this.state.listings}></Listing>}
        {this.state.listings.length < 1 && <Listing listing={this.props.location.state.listings}></Listing>}
      </React.Fragment>

    );
  }
}

export default Search;
