import React from "react";
import { withRouter, NavLink } from "react-router-dom";

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        "https://conduit.productionready.io/api/articles?limit=10&offset=0&tag="
    };
  }
  componentDidMount() {
    fetch("https://conduit.productionready.io/api/tags")
      .then(res => res.json())
      .then(res => this.setState({ tags: res }));
    // console.log(this.state.tags);
  }
  render() {
    return (
      <div className="tag_main_container">
        <div className="tag_heading">Tags</div>
        <div className="all_tag_container">
          {this.state.tags &&
            this.state.tags.tags.map(tag => {
              return (
                <NavLink
                  activeClassName="active_tag"
                  to={`/tags/${tag}`}
                  onClick={event =>
                    this.props.updateArticle(
                      "notAll",
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
    );
  }
}

export default withRouter(Tag);
