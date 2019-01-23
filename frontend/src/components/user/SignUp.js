import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordAgain: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.username,
      email: event.target.email,
      password: event.target.password,
      passwordAgain: event.target.password
    });
  }

  handleSubmit(event) {
    this.setState({ submitted: true });
    event.preventDefault();
    axios.post('http://localhost:8000/rest-auth/registration/',
      {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        passwordConfirm: this.state.password
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4">
            <p><h2 className="text-md-center">Sign Up</h2></p>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange} />
                </fieldset>

                <button
                  type="button submit"
                  className="btn btn-block">
                  Sign Up
                </button>
              </fieldset>
            </form>
            <p></p>
            <p>
              Have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp;
