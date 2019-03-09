import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };

  }

  componentDidMount() {
    return axios.get(`${API_URL}/comments/`)
      .then(res => {
        this.setState({ comments: res.data });
      })
      .catch(error => {
        console.log('Error while fetching!', error);
      });
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Comments;
