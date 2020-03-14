import React from "react";

class Login extends React.Component {
  state = {};
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
              autocomplete="off"
            />
            <label className="login_label" for="login_password">
              {" "}
              Password
            </label>
            <input type="password" name="Password" id="login_password" />
            <input type="button" value="Login" id="login_btn" />
          </form>
        </div>
      </>
    );
  }
}

export default Login;
