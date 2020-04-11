import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchData } from "../utils";
import { storeAllTag, storeArticles } from "../store/actions";

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        "https://conduit.productionready.io/api/articles?limit=10&offset=0&tag=",
    };
  }
  componentDidMount() {
    fetch("https://conduit.productionready.io/api/tags")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ tags: res });
        this.props.dispatch(storeAllTag(res));
      });
    // console.log(this.state.tags);
  }

  updateArticle = (tagName, url) => {
    this.props.dispatch({ type: "ACTIVE_TAGS", payload: tagName });
    if (tagName === "all") {
      fetchData(
        "https://conduit.productionready.io/api/articles?limit=10&offset=0"
      ).then((res) => this.props.dispatch(storeArticles(res)));
    } else {
      localStorage.setItem("active-tag", tagName);
      fetchData(url).then((res) => this.props.dispatch(storeArticles(res)));
    }
  };
  render() {
    return (
      <div className="fixed">
        <div className="tag_main_container">
          <div className="tag_heading">Tags</div>
          <div className="all_tag_container">
            {this.state.tags &&
              this.state.tags.tags.map((tag) => {
                return (
                  <NavLink
                    activeClassName="active_tag"
                    to={`/tags/${tag}`}
                    onClick={(event) =>
                      this.updateArticle(
                        tag,
                        this.state.url + this.props.match.params.tags
                      )
                    }
                    className="single_tags"
                  >
                    {tag}{" "}
                  </NavLink>
                );
              })}
            {/* <div className="clear_filter"> Clear All</div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(Tag));
