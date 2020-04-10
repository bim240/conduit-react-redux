import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Article from "./article";
import Tag from "./tags";
import { fetchData } from "../utils";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      tag: "all",
      activeMenu: "global",
    };
  }
  componentDidMount() {
    fetchData(
      "https://conduit.productionready.io/api/articles?limit=10&offset=0"
    ).then((res) => this.setState({ articles: res }));
    // console.log(this.articles);
    // .then(res => console.log("hello"));
  }
  updateArticle = (tagName, url) => {
    if (tagName === "all") {
      // console.log("called");
      fetchData(
        "https://conduit.productionready.io/api/articles?limit=10&offset=0"
      ).then((res) => this.setState({ articles: res }));
    } else {
      fetchData(url).then((res) => this.setState({ articles: res }));
      // .then(res => console.log(url));
    }
  };
  render() {
    return (
      <>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Article
                articles={this.state.articles}
                updateArticle={this.updateArticle}
              />
              <Tag updateArticle={this.updateArticle} />
            </>
          )}
        />
        <Route
          exact
          path="/tags/:tags"
          render={() => (
            <>
              <Article
                articles={this.state.articles}
                updateArticle={this.updateArticle}
              />
              <Tag updateArticle={this.updateArticle} />
            </>
          )}
        />
        {/* <Route
          exact
          path="/tags/:tags"
          render={() => <Tag updateArticle={this.updateArticle} />}
        /> */}
      </>
    );
  }
}
function mapStateToProps(state) {
  // console.log(state.userReducer.userInfo, "inside home state");
  return state.userReducer.userInfo
    ? { userInfo: state.userReducer.userInfo }
    : null;
}

// change multiple routes in one
export default connect(mapStateToProps)(Home);
