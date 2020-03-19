import React from "react";
import { withRouter, Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";

import Loader from "../loader/index";
import Article from "../article";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      article: null
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      this.setState({ user: this.props.userInfo.user });
      // console.log(this.state.user, "fetch");

      fetch(
        `https://conduit.productionready.io/api/articles?author=${this.state.user.username}&limit=5&offset=0`,
        {
          method: "GET",
          headers: {
            authorization: `Token ${localStorage["conduit-token"]}`
          }
        }
      )
        .then(res => res.json())
        .then(res => this.setState({ article: res }));
    }
  }
  componentDidMount() {
    fetch(`https://conduit.productionready.io/api/user`, {
      method: "GET",
      headers: {
        authorization: `Token ${localStorage["conduit-token"]}`
      }
    })
      .then(res => res.json())
      // .then(res => console.log(res));
      .then(res => {
        this.setState({ user: res.user });
        // this.setState({ userInfo: res });
      });
  }
  render() {
    // console.log(this.props.userInfo, "render");
    console.log(this.state.article, "state");

    return this.state.user ? (
      <>
        <section className="profile_main_conatiner">
          <div className="userInfo_container">
            <div className="profile_image">
              <img src={this.state.user.image} alt="img"></img>
            </div>
            <div className="user_details_container">
              <div className="user_name">
                {this.state.user.username || "Dude write your name"}
              </div>
              <div className="user_bio">{this.state.user.bio}</div>
              <Link to="/setting" className="edit_setting">
                <FaUserEdit className="color_red" />
                <div className="margin_left">Edit</div>{" "}
              </Link>
            </div>
          </div>
          {this.state.article ? (
            <div className="feed_container">
              <div className="feed_heading">
                <div className="feed_name"> My Articles</div>
                <div className="feed_name"> Favorited Articles</div>
              </div>
              <div className="feed_body">
                <Article articles={this.state.article} />
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

export default withRouter(Profile);
