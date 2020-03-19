import React from "react";
import { withRouter } from "react-router-dom";
import Loader from "../loader/index";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.userInfo !== prevProps.userInfo) {
      this.setState({ user: this.props.userInfo.user });
    }
  }
  componentDidMount() {
    console.log(this.props, "cdm");
  }
  render() {
    // console.log(this.props.userInfo, "render");
    console.log(this.state.user, "state");

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
              <div className="edit_setting">setting</div>
            </div>
          </div>
        </section>
      </>
    ) : (
      <Loader />
    );
  }
}

export default withRouter(Profile);
