import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.email = React.createRef(null);
    this.password = React.createRef(null);
  }
  handleLogin = () => {
    fetch(`https://conduit.productionready.io/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        user: {
          email: this.email.current.value,
          password: this.password.current.value
        }
      })
    })
      .then(res => res.json())
      .then(userData => {
        if (userData.errors) {
          // this.props.updateLoggedIn("false");
          // localStorage.setItem("isLogged", "false");
        } else {
          console.log(this.props, "props");
          localStorage.setItem("conduit-token", userData.user.token);
          this.props.updateLoggedIn("true");
          this.props.history.push("/");
        }
      });
  };
  render() {
    return (
      <>
        <div className="login_container">
          <form className="login_form" action="">
            <h1 className="login_heading">Login</h1>
            <label for="login_email" className="login_label">
              {" "}
              Email
            </label>
            <input
              type="text"
              name="username"
              id="login_email"
              // autocomplete="off"
              ref={this.email}
            />
            <label className="login_label" for="login_password">
              {" "}
              Password
            </label>
            <input
              type="password"
              name="Password"
              id="login_password"
              ref={this.password}
            />
            <input
              onClick={this.handleLogin}
              type="button"
              value="Login"
              id="login_btn"
            />
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
