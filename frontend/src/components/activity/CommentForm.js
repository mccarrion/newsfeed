import React, { Component } from 'react';
import { API_URL } from '../../constants/General';
//import isAuthenticated from '../user/Auth';

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

  async handleSubmit(event) {
    event.preventDefault();
    const data = {'body': this.state.comment};
    const res = await fetch(`${API_URL}/articles/${this.props.article}/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('id_token')}`,
      },
      body: JSON.stringify(data),
    });

    console.log(res);
  }

  render() {
    return (
      <div className="container">
        <h4>Comment</h4>
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