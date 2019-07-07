import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { API_URL } from '../../constants/General';
import CommentForm from '../activity/CommentForm';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      error: false
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    return axios.get(`${API_URL}/articles/${params.title}`)
      .then(res => {
        this.setState({ article: res.data });
      })
      .catch(error => {
        console.log('Error while fetching!', error);
    });
  }

  render() {
    const { article } = this.state;
    if (article === null) return <div className="container"><p></p></div>;
    return (
      <div className="display-article">
        <div className="container">
          <div className="col-md-8 offset-md-2">
            <h1>{article.title}</h1>
            <img className="img-fluid" src={`${article.image}`} alt="headline" />
            <b>By {article.author}</b>
            <p>{moment(article.date).format('MMMM D, YYYY')}</p>
            <p>{article.body}</p>
            <CommentForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
