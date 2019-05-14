import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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

  async handleSubmit(event) {
    event.preventDefault();
    const res = await axios.post(`${API_URL}/auth/jwt/create/`, {
        username: this.state.username,
        password: this.state.password
      });
    console.log(res);
      /*
      .then(function (res) {
        localStorage.setItem('id_token', res.token);
        localStorage.setItem('status', res.status);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
      }, this.handleResponse())
      */
  }

  handleResponse = () => {
    if (localStorage.getItem('status') === '301') {
      this.props.history.push('/');
      console.log('Login successful');
    }
  }

  render() {
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

export default withRouter(Login);
