import ArticleList from '../article/ArticleList';
// import TopArticles from '../article/TopArticles';
import WhatsNews from '../article/WhatsNews';
import React, { Component } from 'react';
// import { fetchArticles } from '../../axios';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <WhatsNews />
        <ArticleList />
        {/* <TopArticles /> */}
      </div>
    );
  }
}

export default Home;
