import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';
import CKEditor from 'ckeditor4-react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '<p>Share your ideas</p>'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      data: event.editor.getData()
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post(`${API_URL}/comments/`, {
      comment: this.state.data
    })
  }

  render() {
    return (
      <div className="container">
        <h4>Comments</h4>
        {/* TODO: Change to quilljs -> https://github.com/quilljs/quill */}
        <CKEditor 
          data={this.state.data}
          onChange={this.handleChange} 
        />
      </div>
    );
  }
}

export default CommentForm;