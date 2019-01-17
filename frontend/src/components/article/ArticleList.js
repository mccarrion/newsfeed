import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      current: 1,
      list: 10,
      error: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      current: Number(event.target.id)
    });
  }

  componentDidMount() {
    return axios.get(`http://localhost:8000/api/articles/viewset/`)
      .then(res => {
        this.setState({ articles: res.data });
      })
      .catch(error => {
        console.log('Error while fetching!', error);
    });
  }

  render() {
    const { articles } = this.state;

    const pages = [];
    for (let i = 1; i <= Math.ceil(articles.length / 10); i++) {
      pages.push(i);
    }

    const renderPages = pages.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div>
        <div className="container">
          { 
            articles.map((article, index) => 
              <div class="col-md-8">
                <div key={index}>
                  <div class="container articlePreview">
                    <div class="row">
                      <div class="col-md-8">
                        <Link to={`/${article.subject}/${article.slug}`} className="link">
                          <h3>{article.title}</h3>
                        </Link>
                        <h5>{article.subtitle}</h5>
                        <p>By {article.author} on {moment(article.date).format('MMM D')}</p>
                      </div>
                      <div class="col-md-4">
                        <Link to={`/${article.subject}/${article.slug}`} className="link">
                          <img src={`${article.thumbnail}`} alt="thumbnail" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
        <div className="container">
          <ul>
            { renderPages }
          </ul>
        </div>
      </div>

    )
  }
}

export default ArticleList;
