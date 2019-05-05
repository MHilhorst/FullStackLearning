import React, { Component } from 'react';
const Bootstrap = require('react-bootstrap');

const Navbar = Bootstrap.Navbar;
const Nav = Bootstrap.Nav;
const NavDropdown = Bootstrap.NavDropdown;
const Modal = Bootstrap.Modal;
const Form = Bootstrap.Form;
const Button = Bootstrap.Button;

class Register extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  fetch('http://localhost:5000/api/register', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({"username":data.get('username'),"password":data.get('password')})
  }).then(response => response.json().then(data => {
    if(response.status ===200){
      console.log("success");
    }else{
      this.setState({
        invalid:true
      })
    }
  }
  ));
  }
  render (){
    return(
    <Modal
    {...this.props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Register
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control name="username" placeholder="Enter username" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        {this.state.invalid && <p>Couldn't register</p>} 
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
);
  }
}

export default Register;
