import React, { Component } from 'react';
import axios from 'axios';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      error: false
    };
  }

  componentWillMount() {
    const { match: { params } } = this.props;
    console.log(params.subject);
    const article = axios.get(`http://localhost:8000/api/articles/${params.subject}/${params.title}`).data
    this.setState({
      article,
    });
  }

  render() {
    const { article } = this.state;

    return (
      <div className="display-article">
        <div className="container">
          <div className="col-md-8 offset-md-2">
            <h1>{article.title}</h1>
            <img className="img-fluid" src="{this.props.image.url}" alt="headline" />
            <h3>{article.subtitle}</h3>
            <b>By {article.author}</b>
            <p>{article.date}</p>
            <p>{article.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
