import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import history from '../history';

const Bootstrap = require('react-bootstrap');
const Navbar = Bootstrap.Navbar;
const Nav = Bootstrap.Nav;
const NavDropdown = Bootstrap.NavDropdown;
const Modal = Bootstrap.Modal;
const Form = Bootstrap.Form;
const Button = Bootstrap.Button;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log(data.get('password'));
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"username":data.get('username'),"password":data.get('password')})
    }).then(response => response.json().then(data => {
      console.log(response.status)
      if(response.status === 200){
        history.push('/search');
        this.setState({
          invalid:false
        });
      }else{
        this.setState({
          invalid:true
        });
      }
    }));
  }
    render(){
      const { invalid } = this.state;
      return(
        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
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
            {invalid && <p>Wrong credentials</p>}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      );
    }
}

export default LoginForm;
