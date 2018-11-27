import React from 'react'

class PasswordChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      submitted: False
    };
  }

  render() {
    return (
      <div className="PasswordChange">
        <form onSubmit={this.handleSubmit}>
          <Field type="password" name="existingPassword" required="required" />
          <Field type="password" name="newPassword" required="required" />
          <Field type="password" name="newPasswordCheck" required="required" />
          <button type="submit" name="action">Change Password</button>
        </form>
      </div>
    );
  }
}
