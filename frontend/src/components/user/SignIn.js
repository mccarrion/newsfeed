import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions';

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

  handleSubmit(event) {
    event.preventDefault();
    this.props.actions.userSignIn(this.state.data);
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
                    value={this.state.data.username}
                    onChange={this.handleChange} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.data.password}
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Login);
