import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: {username: '', password: ''}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const data = this.state.data;
    const field = event.target.name;
    data[field] = event.target.value;
    return this.setState({data: data});
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.props.actions.userSignIn(this.state.data);
    /*
    const res = await axios.post(`${API_URL}/auth/jwt/create/`, {
        username: this.state.username,
        password: this.state.password
      });
    */
    //this.handleResponse(res);
    //console.log(res.data.access);
  }
  /*
  handleResponse = (res) => {
    if (res.status === 200) {
      localStorage.setItem('id_token', res.data.access);
      // TODO: Figure out why this approach did not work for authentication
      // axios.defaults.headers.common['Authorization'] = `JWT ${localStorage.getItem('id_token')}`;
      //this.props.history.push('/');
      console.log('Hello');
      console.log(axios.defaults.headers.common['Authorization']);
    }
  }
  */

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
                  className="btn btn-block btn-secondary">
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
