import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
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
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange} />
          <input
            className="form-control"
            type="password"
            value={this.state.password}
            onChange={this.handleChange} />
        </form>

        <button
          className="btn"
          type="submit">
          Log In
        </button>
      </div>
    )
  }
}

export default Login;
