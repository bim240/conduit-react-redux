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
    console.log("inside articles", this.props.articles);
    // this.state.articles &&
    //   this.state.articles.articles.forEach(article => {
    //     console.log(article);
    //   });
    return this.props.articles ? (
      <div className="article_main_conatiner">
        <div className="article_sub_container">
          <div className="all_article_container">
            {this.props.articles &&
              this.props.articles.articles.map(article => {
                // var d = new Date(article.updatedAt);
                // console.log(d.;
                return (
                  <div className="single_article">
                    <div className="author_section">
                      <div className="author_image">
                        {" "}
                        <img
                          title="profile"
                          src={article.author.image}
                          alt="img"
                        ></img>
                      </div>
                      <div>
                        <div className="author_name">
                          {article.author.username}
                        </div>
                        <div className="article_date">
                          {new Date(article.updatedAt)
                            .toUTCString()
                            .slice(0, -4)}
                        </div>
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
                          <div title="like">
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
