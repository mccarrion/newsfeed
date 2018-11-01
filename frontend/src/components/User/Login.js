import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component{
  constructor(props) {
    super(props);
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
