import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/General';
import isAuthenticated from '../user/Auth';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
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
    axios.post(`${API_URL}/comments`, {
      comment: this.state.comment
    });
  }

  render() {
    return (
      <div className="container">
        <h4>Comments</h4>
        {/* TODO: Change to quilljs -> https://github.com/quilljs/quill */}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="container box">
            <fieldset>
              <fieldset className="form-group">
                <textarea
                  className="form-control"
                  name="comment"
                  type="text"
                  placeholder="Share your ideas"
                  value={this.state.comment}
                  onChange={this.handleChange} />
              </fieldset>

              <button
                type="button submit"
                className="btn btn-secondary float-right">
                Submit
              </button>
            </fieldset>
          </div>
        </form>
        <p></p>
      </div>
    );
  }
}

export default CommentForm;