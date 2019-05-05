import React, { Component } from 'react';
export default class Items extends Component {
  render() {
    return (
      <form method="POST" action="http://localhost:5000/api">
        <div class="form-group">
          <label for="exampleInputEmail1">Message</label>
          <input name="name" class="form-control" id="name" placeholder="Enter name" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Bedrag</label>
          <input name="bedrag" class="form-control" id="bedrag" placeholder="Bedrag" />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
  }
}
