import React from 'react';

class ArticleList extends React.Component {
  constructor() {
    super()
    this.state = { articles: [] }
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
