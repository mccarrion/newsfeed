import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.username,
      password: event.target.password
    });
  }

  handleSubmit(event) {
    this.setState({ submitted: true });
    event.preventDefault();
    axios.post('http://localhost:8000/rest-auth/login/',
    {
      username: this.state.username,
      password: this.state.password
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4">
            <p><h2 className="text-md-center">Sign In</h2></p>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
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
                  Sign In
                </button>
              </fieldset>
            </form>
            {/* TODO: Handle padding through a CSS class. */}
            <p></p>
            <p>
              Need an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div> 
        </div>
      </div>
    )
  }
}

export default Login;
