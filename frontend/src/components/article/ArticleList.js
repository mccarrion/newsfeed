import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { API_URL } from '../../constants/General';

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
    event.preventDefault();
    this.setState({
      list: this.state.list + 5
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
          <p></p>
          <div className="container">
            <div className="col-md-8 justify-content-md-center">
              <div className="row justify-content-md-center">
                  <button 
                    handleClick={this.handleClick.bind(this)}
                    type="button submit" 
                    className="btn btn-block btn-secondary">
                    Load More
                  </button>
              </div>
            </div>
        </div>
        <p></p>
      </div>


    )
  }
}

export default ArticleList;
