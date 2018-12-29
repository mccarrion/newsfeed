import ArticleList from '../article/ArticleList';
import React, { Component } from 'react';
import { fetchArticles } from '../../axios';

class Home extends Component {
  componentWillMount() {
    fetchArticles();
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home">
        <ArticleList />
      </div>
    );
  }
}

export default Home;
