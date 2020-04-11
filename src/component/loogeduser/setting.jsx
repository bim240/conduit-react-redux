import React from "react";
import { connect } from "react-redux";

import Loader from "../loader/index";

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "A short bio about yourself",
    };
    this.username = React.createRef(null);
    this.email = React.createRef(null);
    this.bio = React.createRef(null);
    this.image = React.createRef(null);
    this.password = React.createRef(null);
  }
  handleInput = (event) => {
    this.setState({ bio: event.target.value });
  };
  handleUpdate = () => {
    fetch(`https://conduit.productionready.io/api/user`, {
      method: "PUT",
      headers: {
        authorization: `Token ${localStorage["conduit-token"]}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: `${this.email.current.value}`,
          username: `${this.username.current.value}`,
          bio: `${this.bio.current.value}`,
          image: `${this.image.current.value}`,
          password: `${this.password.current.value}`,
        },
      }),
    }).then((res) => res.json());
    // .then((res) => console.log(res));
  };
  componentDidMount() {
    // console.log(this.username, "setting useernams");
    this.email.current.value = this.props.user.email;
    this.username.current.value = this.props.user.username;
    this.bio.current.value = this.props.user.bio;
    this.image.current.value = this.props.user.image;
  }

  render() {
    return this.props.user ? (
      <>
        <div className="setting_main_container">
          <div className="section_name">
            {"Setting".split("").map((v) => {
              return <div className="single_letter">{v}</div>;
            })}
          </div>
          <div className="setting_sub_container">
            <form className="setting_form">
              <input
                type="text"
                className="setting_imgrul"
                placeholder="Image url"
                ref={this.image}
              ></input>
              <input
                type="text"
                className="setting_name"
                placeholder="Username"
                ref={this.username}
              ></input>
              <textarea
                type="text"
                className="setting_bio"
                onChange={this.handleInput}
                ref={this.bio}
              >
                {" "}
              </textarea>
              <input
                type="email"
                className="setting_email"
                placeholder="email"
                ref={this.email}
              ></input>
              <input
                type="text"
                className="setting_password"
                placeholder="password"
                ref={this.password}
              ></input>
              <input
                onClick={this.handleUpdate}
                type="button"
                className="new_article_submit_btn"
                value="Update Setting"
              ></input>
            </form>
          </div>
        </div>
      </>
    ) : (
      <Loader />
    );
  }
}
//
function mapStateToProps(state) {
  return {
    user: state.userReducer.userInfo,
  };
}
export default connect(mapStateToProps)(Setting);
