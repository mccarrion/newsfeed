import Preview from './Preview';
import React, { Component } from 'react';
import { fetchArticles } from '../../axios';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      list: 10,
      error: false
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {list: prev.list + 10};
    })
  }

  componentDidMount() {
    fetchArticles();
  }

  render() {
    return (
      <div>
          {
            this.state.articles.map(article => {
              return (
                <Preview article={article} key={article.slug} />
              );
            })
          }
      </div>
    )
  }
}

export default ArticleList;
