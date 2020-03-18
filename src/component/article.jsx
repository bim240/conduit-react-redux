import React from "react";
import { withRouter, Link, NavLink } from "react-router-dom";

import { IconContext } from "react-icons";
import { IoMdHeart } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import Loader from "./loader";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles,
      activeMenu: "global"
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
    return this.props.articles ? (
      <div className="article_main_conatiner">
        <div className="article_sub_container">
          <div className="feed_type">
            <Link
              onclick={() => {
                this.setState({ activeMenu: "global" });
                console.log("this.props.updateArticle()");
                this.props.updateArticle("all", "hey");
              }}
              to="/"
              className={`article_heading ${
                this.state.activeMenu === "global"
                  ? "article_heading_active"
                  : ""
              }`}
            >
              {" "}
              Global
            </Link>
            <Link
              onclick={() => this.setState({ activeMenu: "feed" })}
              to="/"
              className={`article_heading ${
                this.state.activeMenu === "feed" ? "article_heading_active" : ""
              }`}
            >
              {" "}
              Feed
            </Link>
            <Link
              onclick={() => this.setState({ activeMenu: "tag" })}
              to="/"
              className={`article_heading ${
                this.state.activeMenu === "tag" ? "article_heading_active" : ""
              }`}
            >
              {" "}
              Tag
            </Link>
          </div>

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
                      <Link
                        to={`/article/${article.slug}`}
                        className="article_title"
                      >
                        {article.title}
                      </Link>
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
    ) : (
      <Loader />
    );
  }
}

export default withRouter(Article);
