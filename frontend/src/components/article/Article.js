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

  componentDidMount() {
    const { match: { params } } = this.props;
    return axios.get(`http://localhost:8000/api/articles/${params.subject}/${params.title}`)
      .then(res => {
        this.setState({ article: res.data });
      })
      .catch(error => {
        console.log('Error while fetching!', error);
    });
  }

  render() {
    const { article } = this.state;
    if (article === null) return <div className="container"><p>Loading ...</p></div>;
    return (
      <div className="display-article">
        <div className="container">
          <div className="col-md-8 offset-md-2">
            <h1>{article.title}</h1>
            <img className="img-fluid" src={`${article.image}`} alt="headline" />
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
