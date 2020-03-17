import React from "react";
import { Route } from "react-router-dom";

import Article from "./article";
import Tag from "./tags";
import { fetchData } from "../utils";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      tag: "all"
    };
  }
  componentDidMount() {
    fetchData(
      "https://conduit.productionready.io/api/articles?limit=10&offset=0"
    ).then(res => this.setState({ articles: res }));
    // console.log(this.articles);
    // .then(res => console.log("hello"));
  }
  updateArticle = (url, tagName) => {
    if (tagName === "all") {
      fetchData(
        "https://conduit.productionready.io/api/articles?limit=10&offset=0"
      ).then(res => this.setState({ articles: res }));
    } else {
      fetchData(url).then(res => this.setState({ articles: res }));
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
              <Article articles={this.state.articles} />
              <Tag updateArticle={this.updateArticle} />
            </>
          )}
        />
        <Route
          exact
          path="/tags/:tags"
          render={() => <Article articles={this.state.articles} />}
        />
        <Route
          exact
          path="/tags/:tags"
          render={() => <Tag updateArticle={this.updateArticle} />}
        />
      </>
    );
  }
}

// change multiple routes in one
export default Home;
