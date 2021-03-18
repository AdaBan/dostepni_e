import React from 'react';
import { Link } from 'gatsby';

export default ({ article }) => (
  <div>
    <h3>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    <small>{article.publishDate}</small>
  </div>
);
