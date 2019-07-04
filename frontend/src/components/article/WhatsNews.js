import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constants/General';

class WhatsNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
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

    return (
      <div>
        <div className="container">
          <div className="col-md-12">
            <div className="row underline">
              <h4>What's News</h4>
            </div>
          </div>
          <p></p>
          <div className="row">
            {
              articles.map((article, index) => {
                if (article.whats_news)
                  return (
                    <div className="col-md-3 d-flex align-items-end flex-column">
                      <div key={index}>
                        <Link to={`/${article.subject}/${article.slug}`} className="link">
                          <img src={`${article.image}`} alt="thumbnail" className="img-fluid" />
                        </Link>
                        <Link to={`/${article.subject}/${article.slug}`} className="link">
                          <h3>{article.title}</h3>
                        </Link>
                      </div>
                      <div className="mt-auto container underline"></div>
                    </div>
                  );
                return <span></span>;
                }
              )
            }
          </div>
          <p></p>
        </div>
      </div>
    )
  }
}

export default WhatsNews;