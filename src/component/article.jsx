import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { AiFillLike } from "react-icons/ai";
import { IconContext } from "react-icons";
import { IoMdHeart } from "react-icons/io";
import Loader from "./loader";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleActiveArticle = (slug) => {
    this.props.dispatch({ type: "ACTIVE_ARTICLES", payload: slug });
  };

  render() {
    // console.log("inside articles", this.props);

    return this.props.articles ? (
      <div className="article_main_conatiner">
        <div className="article_sub_container">
          <div className="all_article_container">
            {this.props.articles &&
              this.props.articles.map((article) => {
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
                            .slice(0, -13)}
                        </div>
                      </div>
                    </div>
                    <div className="article_content">
                      <Link
                        onClick={() => this.handleActiveArticle(article.slug)}
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
                            <AiFillLike />
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

// consume
function mapStateToProps(state) {
  // console.log(state, "inside articel section");
  return {};
}
// mapStateToProps();
export default connect(mapStateToProps)(withRouter(Article));
