import React, { Component } from 'react';
import { getArticle } from '../../axios';

class Article extends Component {
  componentWillMount() {
    getArticle();
  }

  render() {
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
