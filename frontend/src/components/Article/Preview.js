import React from 'react';
import { Link } from 'react-router-dom';

const Preview = props => {
  const article = props.article;

  return (
    <div className="preview">
      <Link to={`/${article.subject}/${article.slug}`} className="link">
        <img src="{article.thumbnail.url}" />
      </Link>
      <Link to={`/${article.subject}/${article.slug}`} className="link">
        <h3>{article.title}</h3>
      </Link>
      <h5>{article.subtitle}</h5>
      <p>By {article.author} on {article.date}</p>
    </div>
  );
}

export const Preview;
