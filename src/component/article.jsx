import React from "react";
import { withRouter, Link } from "react-router-dom";

import { IconContext } from "react-icons";
import { IoMdHeart } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles
    };
  }

  render() {
    console.log(
      "inside articles",
      this.props.articles && this.props.articles.articles
    );
    // this.state.articles &&
    //   this.state.articles.articles.forEach(article => {
    //     console.log(article);
    //   });
    return (
      <div className="article_main_conatiner">
        <div className="article_sub_container">
          <Link to="/" className="article_heading">
            {" "}
            Global
          </Link>
          <div className="all_article_container">
            {this.props.articles &&
              this.props.articles.articles.map(article => {
                return (
                  <div className="single_article">
                    <div className="author_section">
                      <div className="author_image">
                        {" "}
                        <img src={article.author.image} alt="img"></img>
                      </div>
                      <div>
                        <div className="author_name">
                          {article.author.username}
                        </div>
                        <div className="article_date">{article.updatedAt}</div>
                      </div>
                    </div>
                    <div className="article_content">
                      <div className="article_title">{article.title}</div>
                      <div className="article_body">{article.body}</div>
                    </div>
                    <div className="article_more_info">
                      <div className="article_like">
                        <IconContext.Provider
                          value={{ className: "article_like_icon" }}
                        >
                          <div>
                            <GiSelfLove />
                          </div>
                        </IconContext.Provider>
                      </div>
                      <div className="article_favroute_count">
                        {" "}
                        <IconContext.Provider
                          value={{ className: "article_like_icon" }}
                        >
                          <div>
                            <IoMdHeart />
                          </div>
                        </IconContext.Provider>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Article);
