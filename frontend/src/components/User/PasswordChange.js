import React from 'react'

class PasswordChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      existingPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
      submitted: False
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      existingPassword: event.target.existingPassword,
      newPassword: event.target.newPassword,
      newPasswordConfirm: event.target.newPasswordConfirm
    });
  }

  handleSubmit(event) {
    this.setState({ submitted: True });
    event.preventDefault();
  }

  render() {
    return (
      <div className="PasswordChange">
        <form onSubmit={this.handleSubmit}>
          <Field type="password" name="existingPassword" required="required" />
          <Field type="password" name="newPassword" required="required" />
          <Field type="password" name="newPasswordConfirm" required="required" />
          <button type="submit" name="action">Change Password</button>
        </form>
      </div>
    );
  }
}
