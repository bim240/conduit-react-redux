import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.email = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();
  }
  handleSignup = () => {
    console.log("inside signup");
    fetch(`https://conduit.productionready.io/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.username.current.value,
          email: this.email.current.value,
          password: this.password.current.value
        }
      })
    })
      .then(res => res.json())
      .then(userDate => {
        if (!userDate.error) {
          this.props.history.push("/login");
        }
      });
  };

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
              ref={this.username}
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
              ref={this.email}
            />
            <label className="signup_label" for="signup_password">
              {" "}
              Password
            </label>
            <input
              type="password"
              name="Password"
              id="signup_password"
              ref={this.password}
            />
            <label className="signup_label" for="signup_repassword">
              {" "}
              Re-enter Password
            </label>
            <input type="password" name="Password" id="signup_repassword" />
            <input
              onClick={this.handleSignup}
              type="button"
              value="Signup"
              id="signup_btn"
            />
          </form>
        </div>
      </>
    );
  }
}

export default Signup;
