import React from 'react';

class ArticleList extends React.Component {
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

  }

  render() {
    return (
      <div>
          {
            this.state.articles.map(article => {
              <Preview article={article} key={article.slug} />
            });
          }
      </div>
    )
  }
}
