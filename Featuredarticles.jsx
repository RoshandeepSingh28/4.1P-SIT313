import React from 'react';

const articles = [
  { title: 'Article 1', description: 'Description of Article 1', author: 'Author 1' },
  { title: 'Article 2', description: 'Description of Article 2', author: 'Author 2' },
  { title: 'Article 3', description: 'Description of Article 3', author: 'Author 3' },
];

const FeaturedArticles = () => (
  <div>
    <h2>Featured Articles</h2>
    <div className="article-cards">
      {articles.map((article, index) => (
        <div key={index} className="article-card">
          
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <p><strong>{article.author}</strong></p>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturedArticles;