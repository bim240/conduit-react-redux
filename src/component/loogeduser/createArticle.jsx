import React from "react";
import { Link } from "react-router-dom";

class NewArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaContent: "Write your article (in markdown)"
    };
    this.title = React.createRef(null);
    this.body = React.createRef(null);
    this.description = React.createRef(null);
    this.tagList = React.createRef(null);
  }
  handleInput = event => {
    this.setState({ textareaContent: event.target.value });
  };
  createArticle = () => {
    console.log(this);
    fetch(`https://conduit.productionready.io/api/articles`, {
      method: "POST",
      headers: {
        authorization: `Token ${localStorage["conduit-token"]}`,
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        article: {
          title: this.title.current.value,
          description: this.description.current.value,
          body: this.state.textareaContent,
          tagList: [this.tagList.current.value]
        }
      })
    })
      .then(res => res.json())
      .then(res => {
        this.props.history.push("/");
        console.log(res);
      });
  };
  render() {
    console.log(this);
    return (
      <>
        <div className="create_article_main_container">
          <div className="section_name">
            {"Article".split("").map(v => {
              return <div className="single_letter">{v}</div>;
            })}
          </div>
          <div className="create_article_sub_container">
            <form className="create_article_form">
              <input
                type="text"
                className="new_article_title"
                placeholder="Title"
                ref={this.title}
              ></input>
              <input
                type="text"
                className="new_article_subtitle"
                placeholder="What's this article about"
                ref={this.description}
              ></input>
              <textarea
                type="text"
                className="new_article_content"
                value={this.state.textareaContent}
                onChange={this.handleInput}
              >
                {" "}
              </textarea>
              <input
                type="text"
                className="new_article_tag"
                placeholder="Tags"
                ref={this.tagList}
              ></input>
              <input
                onClick={this.createArticle}
                type="button"
                className="new_article_submit_btn"
                value="Publish Article"
              ></input>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default NewArticle;
