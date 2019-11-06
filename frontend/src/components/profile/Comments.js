import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };

  }

  componentDidMount() {
    // TODO: Need to make this filter by user who is logged in
    return axios.get(`${API_URL}/users/${user.username}/comments/`)
      .then(res => {
        this.setState({ comments: res.data });
      })
      .catch(error => {
        console.log('Error while fetching!', error);
      });
  }

  render() {
    const { comments } = this.state;

    return(
      <div className="container">
        {
          comments.map((comment, index) =>
            <div className="col-md-8">
              <div key={index}>
                <div className="row">
                  <p>{comment.text}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Comments;