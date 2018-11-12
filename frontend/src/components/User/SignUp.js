import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      submitted: False
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      fullName: event.target.fullName,
      email: event.target.email,
      password: event.target.password
    });
  }

  handleSubmit(event) {
    this.setState({ submitted: True });
    event.preventDefault();
  }

  render() {
    return (
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>

        </form>
      </div>
    )
  }
}
