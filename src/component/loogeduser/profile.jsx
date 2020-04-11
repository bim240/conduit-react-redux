import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";

import Loader from "../loader/index";
import Article from "../article";
import { storeArticles } from "../../store/actions";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(
      `https://conduit.productionready.io/api/articles?author=${this.props.user.username}&limit=5&offset=0`,
      {
        method: "GET",
        headers: {
          authorization: `Token ${localStorage["conduit-token"]}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => this.props.dispatch(storeArticles(res)));
  }
  render() {
    // console.log(this.props.userInfo, "render");
    // console.log(this.props, "state profile state");

    return this.props.user ? (
      <>
        <section className="profile_main_conatiner">
          <div className="userInfo_container">
            <div className="profile_image">
              <img src={this.props.user.image} alt="img"></img>
            </div>
            <div className="user_details_container">
              <div className="user_name">
                {this.props.user.username || "Dude write your name"}
              </div>
              <div className="user_bio">{this.props.user.bio}</div>
              <Link to="/setting" className="edit_setting">
                <FaUserEdit className="color_red" />
                <div className="margin_left">Edit</div>{" "}
              </Link>
            </div>
          </div>
          {this.props.articles ? (
            <div className="feed_container">
              <div className="feed_heading">
                <div className="feed_name"> My Articles</div>
                <div className="feed_name"> Favorited Articles</div>
              </div>
              <div className="feed_body">
                <Article articles={this.props.articles} />
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </section>
      </>
    ) : (
      <Loader />
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.userReducer.userInfo ? state.userReducer.userInfo : null,
    articles: state.articleReducer.articles
      ? state.articleReducer.articles.articles
      : null,
  };
}
export default connect(mapStateToProps)(withRouter(Profile));
