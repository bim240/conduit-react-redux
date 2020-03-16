import React from "react";
import { Route } from "react-router-dom";

import Article from "./article";
import Tag from "./tags";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      tag: "all"
    };
  }
  componentDidMount() {
    fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0")
      .then(res => res.json())
      .then(res => this.setState({ articles: res }));
    // console.log(this.articles);
    // .then(res => console.log("hello"));
  }
  updateArticle = (url, tagName) => {
    if (tagName === "all") {
      fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0")
        .then(res => res.json())
        .then(res => this.setState({ articles: res }));
    } else {
      fetch(url)
        .then(res => res.json())
        .then(res => this.setState({ articles: res }));
      // .then(res => console.log(url));
    }
  };
  render() {
    return (
      <>
        <Route
          exact
          path="/"
          render={() => <Article articles={this.state.articles} />}
        />
        <Route
          exact
          path="/"
          render={() => <Tag updateArticle={this.updateArticle} />}
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

export default Home;
