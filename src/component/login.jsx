import React from "react";

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
        user: { email: "bimlendu357@gmail.com", password: "123456789" }
      })
    })
      .then(res => res.json())
      .then(userdate => {
        if (userdate.errors) {
          localStorage.setItem("isLogged", "false");
        } else {
          localStorage.setItem("isLogged", "true");
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

export default Login;
