import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { API_URL } from '../../constants/General';

class ArticleComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };

  }

  componentDidMount() {
    return axios.get(`${API_URL}/articles/${this.props.article}/comments/`)
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
          <u><h5>Comments</h5></u>
          {
            comments.map((comment, index) =>
              <div key={index}>
                <div className="row">
                  <div className="col-md-12">
                    <p><b>{comment.user.username}</b> on {moment(comment.date).format('MMMM D, YYYY')}
                    <p>{comment.body}</p></p>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default ArticleComments;
