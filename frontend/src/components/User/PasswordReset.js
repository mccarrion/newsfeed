import React from 'react'

class PasswordReset extends React.Component {
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
