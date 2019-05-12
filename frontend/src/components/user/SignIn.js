import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post(`${API_URL}/auth/jwt/create/`, {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
      .then(function (res) {
        if (res.status === 200) {
          this.setState({ redirect: true });
          localStorage.setItem('id_token', res.token)
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
          console.log('Login successful');
        }
      })
  }

  render() {
    const { redirect } = this.state.redirect;
    if (redirect === true) {
      return (
        <Redirect to={"/science/blah-blah-blah"} />
      )
    } else {
      return (
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-4">
              <h2 className="text-md-center">Sign In</h2>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.handleChange} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      name="password"
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
      );
    }
  }
}

export default Login;
