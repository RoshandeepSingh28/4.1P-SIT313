class ArticleObj {
    constructor(src, alt, title, description,rating, name) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.description = description;
      this.rating = rating
      this.author_name = name
    }
  }

  const description1 = "India lifted their second T20 World Cup - their first in 17 years - on Saturday by beating South Africa in a thriller. Both Virat Kohli and Rohit Sharma announced their retirements after the win"
  const description2 = "In 2009, Ryan Dahl invented node.js, an interpreter for running JS code server-side without the need for a browser. Since then, there has been a proliferation of command-line tools based on JS. Node.js includes a package manager called Node Package Manager (npm)"
  const description3 = "Apple has officially launched its iPhone 16 series, and with it comes a range of exciting new features, most notably the introduction of Apple Intelligence."
  var article1 = new ArticleObj("./images/Article.jpeg", "Article", "Cricket", description1,4, "Isabelle");
  var article2 = new ArticleObj("./images/Article3.jpeg", "Article 2", "Javascript", description2,3, "Ryan");
  var article3 = new ArticleObj("./images/Article2.jpeg", "Article 3", "Iphone 16", description3,5, "Apple");

function Article({article}){
    return(
    <div className="article-body">
        <img src={article.src} alt={article.alt} />
        <h2>{article.title}</h2>
        <div className="article-body-text">
            <p>{article.description}</p>
            <hr></hr>
            <div className="star-rating">
                <img src="./images/star.jpeg" alt="star" />
                <h5>{article.rating}</h5>
                <h4>{article.author_name}</h4>

            </div>
        </div>
    </div>
    )
}

function ArticleReact(){
    return(
        <div className="all-articles">
            <Article article={article1} />
            <Article article={article2} />
            <Article article={article3} />
        </div>
    )
}

export { ArticleObj, Article, ArticleReact };