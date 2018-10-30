import React, from 'react';

const FetchArticles = props => {
  return (
    <div>
      {
        props.articles.map(article => {
          return (
            <Article article={article} />
          );
        })
      }
    </div>
  )

}
