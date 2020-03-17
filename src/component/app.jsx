import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./header";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Setting from "./loogeduser/setting";
import NewArticle from "./loogeduser/createArticle";
import ArticleDetails from "./articleDetails";
import "../assets/stylesheets/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.state.articles);
    return (
      <div className="home_page_devision">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tags/:tag" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/editor" component={NewArticle} />
          <Route path="/setting" component={Setting} />
          \<Route path="/article/:slug" component={ArticleDetails} />
          <Route path="*" render={() => <h1>404 Page</h1>} />
        </Switch>

        {/* <Route exact path="/article/:slug" component={ArticleByTag} /> */}
      </div>
    );
  }
}

export default App;

// const React.App = () => {
//   return (
//     <div className="home_page_devision">
//       <Header />
//       <Route exact path="/" component={Article} />
//       <Route exact path="/" component={Tag} />
//       <Route exact path="/login" component={Login} />
//       <Route exact path="/signup" component={Signup} />
//       <Route exact path="/editor" component={NewArticle} />
//       <Route exact path="/setting" component={Setting} />
//     </div>
//   );
// };

// export default App;
