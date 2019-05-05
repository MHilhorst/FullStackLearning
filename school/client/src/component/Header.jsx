import React, { Component } from 'react';
import Register from './Register';
import LoginForm from './LoginForm';
const Bootstrap = require('react-bootstrap');

const Navbar = Bootstrap.Navbar;
const Nav = Bootstrap.Nav;
const NavDropdown = Bootstrap.NavDropdown;
const Modal = Bootstrap.Modal;
const Form = Bootstrap.Form;
const Button = Bootstrap.Button;

class Header extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      modalShow: false,
      modalShowRegister: false
     };
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false, modalShowRegister:false });

    return (
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/search">Search</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button variant="link" onClick={() => this.setState({ modalShow: true })}>Login</Button>
        <Button variant="success" onClick={() => this.setState({ modalShowRegister: true })}>Register</Button>
      </Navbar.Collapse>
      <LoginForm show={this.state.modalShow} onHide={modalClose}></LoginForm>
      <Register show={this.state.modalShowRegister} onHide={modalClose}></Register>
    </Navbar>
    );
  }

}

export default Header;
