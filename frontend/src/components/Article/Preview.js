import React from 'react';

const Preview = props => {
  const article = props.article;

  return (
    <div className="preview">
      <Link to={`/:subject/${article.slug}`} className="link">
        <h2>{article.title}</h2>
      </Link>
    </div>
  );
}
