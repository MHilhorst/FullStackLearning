import React, { Component } from 'react';
const Bootstrap = require('react-bootstrap');

const Navbar = Bootstrap.Navbar;
const Nav = Bootstrap.Nav;
const NavDropdown = Bootstrap.NavDropdown;
const Modal = Bootstrap.Modal;
const Form = Bootstrap.Form;
const Button = Bootstrap.Button;
const Card = Bootstrap.Card;
  const Listing = ({ listing }) => {
    return (
      <div>
        <center><h1>Contact List</h1></center>
        {listing.map(listing => (
          <Card>
            <Card.Header as="h5">{listing.location}</Card.Header>
            <Card.Body>
              <Card.Title>{listing.name} - Monthly rent: {listing.monthly}</Card.Title>
              <Card.Text>
                {listing.description}
              </Card.Text>
              <Button variant="primary">View</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    )
  };
export default Listing;
