import React, { Component } from 'react'

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordConfirm: '',
      submitted: False
    };
  }

  render() {
    return (
      <div className="PasswordReset">
        <form onSubmit={this.handleSubmit}>

        </form>
      </div>
    );
  }
}

export default PasswordReset;
