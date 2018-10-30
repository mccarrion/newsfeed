// Need to add a way to fetch articles based on subject

import React, from 'react';

const Fetch = props => {
  return (
    <div>
      {
        props.articles.map(article => {
          return (
            <Article key={slug} article={article} />
          );
        })
      }
    </div>
  );

}
