// import Preview from './Preview';
import React, { Component } from 'react';
import { fetchArticles } from '../../axios';

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
    fetchArticles();
  }

  render() {
    const { articles, current, list } = this.state;

    const indexLastArticle = current * list;
    const indexFirstArticle = indexLastArticle - list;
    const currentArticles = articles.slice(indexFirstArticle, indexLastArticle);

    const renderArticles = currentArticles.map((article, index) => {
      return (
        <li key={index}>
          {article}
        </li>
      );
    });

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
        <ul>
          { renderArticles }
        </ul>
        <ul>
          { renderPages }
        </ul>
      </div>
      // <div>
      //     {
      //       this.state.articles.map(article => {
      //         return (
      //           <Preview article={article} key={article.slug} />
      //         );
      //       })
      //     }
      // </div>
    )
  }
}

export default ArticleList;
