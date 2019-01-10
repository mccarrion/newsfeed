import React, { Component } from 'react';
import { getArticle } from '../../axios';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      error: false
    };
  }

  componentWillMount() {
    return axios.get(`${API_URL}/articles/${subject}/${slug}`)
      .then(res => {
        this.setState({ article: res.data });
      })
      .catch(error => {
        console.log('Error while fetching!', error);
      });
  }

  render() {
    const { article } = this.state;

    return (
      <div className="display-article">
        <div className="container">
          <div className="col-md-8 offset-md-2">
            <h1>{this.article.title}</h1>
            <img className="img-fluid" src="{this.props.image.url}" alt="headline" />
            <h3>{this.article.subtitle}</h3>
            <b>By {this.article.author}</b>
            <p>{this.article.date}</p>
            <p>{this.article.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
