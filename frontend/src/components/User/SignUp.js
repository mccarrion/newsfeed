import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      submitted: False
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
    this.setState({ submitted: True });
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
            value={this.username}
            onChange={this.handleChange} />
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={this.email}
            onChange={this.handleChange} />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={this.password}
            onChange={this.handleChange} />
        </form>

        <button
          className="btn"
          type="submit">
          Sign Up
        </button>
      </div>
    )
  }
}

export default SignUp;
