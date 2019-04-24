import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
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

  handleSubmit(event) {
    event.preventDefault();
    axios.post(`${API_URL}/comments/`, {
      text: this.state.text
    })
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default CommentForm;