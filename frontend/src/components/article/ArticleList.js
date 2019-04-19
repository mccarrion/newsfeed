import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { API_URL } from '../../constants/appConstants';

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
    return axios.get(`${API_URL}/articles/`)
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
        <li className="page-item" key={number} id={number} onClick={this.handleClick}>
          <button className="page-link" href="#">{number}</button>
        </li>
      );
    });

    return (
      <div>
        <div className="container">
          <div className="col-md-8">
            <div className="row underline">
              <h4>The Latest</h4>
            </div>
          </div>
          { 
            articles.map((article, index) => {
              if (!article.whats_news)
                return (
                  <div className="col-md-8">
                    <div key={index}>
                      <div className="container article-preview">
                        <div className="row">
                          <div className="col-md-3">
                            <Link to={`/${article.subject}/${article.slug}`} className="link">
                              <img src={`${article.thumbnail}`} alt="thumbnail" />
                            </Link>
                          </div>
                          <div className="col-md-9">
                            <Link to={`/${article.subject}/${article.slug}`} className="link">
                              <h3>{article.title}</h3>
                            </Link>
                            <p>{article.subtitle}</p>
                            <p>By {article.author} on {moment(article.date).format('MMMM D')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                return <span></span>;
              }
            )
          }
        </div>
        <div className="container">
          <div className="col-md-8 justify-content-md-center">
            <div className="row justify-content-md-center">
              <ul className="pagination">
                {/* TODO: Switch from button to a for linking in the near future */}
                <li className="page-item"><button className="page-link" href="#">Previous</button></li>
                { renderPages }
                <li className="page-item"><button className="page-link" href="#">Next</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default ArticleList;
