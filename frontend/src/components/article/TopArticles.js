import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constants';

class TopArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      error: false
    };
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
        {
          articles.map((article, index) =>
            <div key={index}>
              <Link to={`/${article.subject}/${article.slug}`} className="link">
                <img src={`${article.thumbnail}`} alt="thumbnail" />
              </Link>
            </div>
          )
        }
      </div>
    )
  }
}

export default TopArticles;