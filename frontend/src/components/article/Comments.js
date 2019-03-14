import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';
import ArticleList from './ArticleList';

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
    const { comments } = this.state;

    return (
      <div>
        <div className="container">
          {
            comments.map((comment, index) =>
              <div className="col-md-8"></div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Comments;
