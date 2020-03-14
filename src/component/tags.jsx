import React from "react";

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: null
    };
  }
  componentDidMount() {
    fetch("https://conduit.productionready.io/api/tags")
      .then(res => res.json())
      .then(res => this.setState({ tags: res }));
    console.log(this.state.tags);
  }
  render() {
    return (
      <div className="tag_main_container">
        <div className="tag_heading">Tags</div>
        <div className="all_tag_container">
          {this.state.tags &&
            this.state.tags.tags.map(tag => {
              return <div className="single_tags">{tag} </div>;
            })}
        </div>
      </div>
    );
  }
}

export default Tag;
