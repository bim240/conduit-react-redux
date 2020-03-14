import React from "react";
class Signup extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="signup_container">
          <form className="signup_form" action="">
            <h1 className="signup_heading">Signup</h1>
            <label for="signup_name" className="signup_label">
              {" "}
              Name
            </label>
            <input
              type="text"
              name="username"
              id="signup_name"
              autocomplete="off"
            />
            <label for="signup_email" className="signup_label">
              {" "}
              Email
            </label>
            <input
              type="email"
              name="email"
              id="signup_email"
              autocomplete="off"
            />
            <label className="signup_label" for="signup_password">
              {" "}
              Password
            </label>
            <input type="password" name="Password" id="signup_password" />
            <label className="signup_label" for="signup_repassword">
              {" "}
              Re-enter Password
            </label>
            <input type="password" name="Password" id="signup_repassword" />
            <input type="button" value="Signup" id="signup_btn" />
          </form>
        </div>
      </>
    );
  }
}

export default Signup;
