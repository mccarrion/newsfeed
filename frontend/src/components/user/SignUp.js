import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.username,
      email: event.target.email,
      password: event.target.password
    });
  }

  handleSubmit(event) {
    this.setState({ submitted: true });
    event.preventDefault();
  }

  render() {
    return (
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange} />
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange} />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange} />
        </form>

        <Button
          className="btn"
          type="submit">
          Sign Up
        </Button>
      </div>
    )
  }
}

export default SignUp;
