import ArticleList from '../article/ArticleList';
// import TopArticles from '../article/TopArticles';
import React, { Component } from 'react';
// import { fetchArticles } from '../../axios';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <ArticleList />
        {/* <TopArticles /> */}
      </div>
    );
  }
}

export default Home;
