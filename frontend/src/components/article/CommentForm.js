import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, editor) {
    const value = editor.getData();
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post(`${API_URL}/comments/`, {
      comment: this.state.comment
    })
  }

  render() {
    return (
      <div className="container">
        <h4>Comments</h4>
        <CKEditor 
          editor={ ClassicEditor }
          data="<p>Share your ideas</p>"
          onInit={ editor => {
            console.log('Editor is working!', editor);
          }}
          name="comment"
          type="text"
          value={this.state.comment}
          onChange={this.handleChange}
          // onChange={ (event, editor) => {
          //   const data = editor.getData();
          //   console.log({ event, editor, data });
          // }}
        />
      </div>
    );
  }
}

export default CommentForm;