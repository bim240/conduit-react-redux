import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Article from "./article";
import Tag from "./tags";
import { fetchData } from "../utils";
import { storeArticles } from "../store/actions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: "all",
    };
  }
  componentDidMount() {
    if (!this.props.activeTag) {
      fetchData(
        "https://conduit.productionready.io/api/articles?limit=10&offset=0"
      ).then((res) => {
        this.props.dispatch(storeArticles(res));
      });
    } else {
      fetchData(
        `https://conduit.productionready.io/api/articles?limit=10&offset=0&tag=${this.props.activeTag}`
      ).then((res) => {
        this.props.dispatch(storeArticles(res));
      });
    }
  }
  updateArticle = (tagName, url) => {
    if (tagName === "all") {
      fetchData(
        "https://conduit.productionready.io/api/articles?limit=10&offset=0"
      ).then((res) => this.props.dispatch(storeArticles(res)));
    } else {
      fetchData(url).then((res) => this.props.dispatch(storeArticles(res)));
    }
  };
  render() {
    // console.log(this.props, "props of home");
    return (
      <>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Article
                articles={this.props.articles}
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
              <Article articles={this.props.articles} />
              <Tag />
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
// consume
function mapStateToProps(state) {
  console.log(state, "inside home state map to props");
  return {
    articles: state.articleReducer.articles
      ? state.articleReducer.articles.articles
      : null,
    activeTag: state.tagsReducer ? state.tagsReducer.activeTag : null,
  };
}

// change multiple routes in one
export default connect(mapStateToProps)(Home);
