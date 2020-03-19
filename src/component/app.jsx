import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./header";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Profile from "./loogeduser/profile";
import Setting from "./loogeduser/setting";
import NewArticle from "./loogeduser/createArticle";
import ArticleDetails from "./articleDetails";
import "../assets/stylesheets/main.scss";

function Auth(newprops) {
  console.log(newprops, "auth");
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tags/:tag" component={Home} />
      <Route
        path="/user"
        render={() => <Profile userInfo={newprops.userInfo} />}
      />
      <Route path="/editor" component={NewArticle} />
      <Route path="/article/:slug" component={ArticleDetails} />
      <Route path="/setting" component={Setting} />
      <Route path="*" render={() => <h1>404 Page</h1>} />
    </Switch>
  );
}
function NoAuth(newprops) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tags/:tag" component={Home} />
      <Route
        path="/login"
        render={() => <Login updateLoggedIn={newprops.updateLoggedIn} />}
      />
      <Route path="/signup" component={Signup} />
      \<Route path="/article/:slug" component={ArticleDetails} />
      <Route path="*" render={() => <h1>404 Page</h1>} />
    </Switch>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userInfo: null
    };
  }
  updateLoggedIn = (value, userData) => {
    this.setState({ isLoggedIn: value });
    this.setState({ userInfo: userData });
  };
  componentDidMount() {
    // console.log("cdm");
    console.log(localStorage["conduit-token"]);
    if (localStorage["conduit-token"]) {
      fetch(`https://conduit.productionready.io/api/user`, {
        method: "GET",
        headers: {
          authorization: `Token ${localStorage["conduit-token"]}`
        }
      })
        .then(res => res.json())
        // .then(res => console.log(res));
        .then(res => {
          this.setState({ isLoggedIn: true });
          this.setState({ userInfo: res });
        });
    }
  }

  render() {
    console.log(this.state.isLoggedIn);
    return (
      <div className="home_page_devision">
        <Header
          isLoggedIn={this.state.isLoggedIn}
          updateLoggedIn={this.updateLoggedIn}
        />
        {this.state.isLoggedIn ? (
          <Auth userInfo={this.state.userInfo} />
        ) : (
          <NoAuth updateLoggedIn={this.updateLoggedIn} />
        )}
      </div>
    );
  }
}

export default App;
