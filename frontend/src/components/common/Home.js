import ArticleList from '../article/ArticleList';
import React, { Component } from 'react';

class Home extends Component {
  componentWillMount() {

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
