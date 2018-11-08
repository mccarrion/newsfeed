import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component{
  constructor() {
    super();
    this.submitForm = (email, password) => e => {
      e.preventDefault();
      this.props.onSubmit(email, password);
    };
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>

        </form>
      </div>
    )
  }
}
