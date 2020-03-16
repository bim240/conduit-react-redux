import React from "react";

class NewArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaContent: "Write your article (in markdown)"
    };
  }
  handleInput = event => {
    this.setState({ textareaContent: event.target.value });
  };
  render() {
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
              ></input>
              <input
                type="text"
                className="new_article_subtitle"
                placeholder="What's this article about"
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
              ></input>
              <input
                type="submit"
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
