import React from "react";

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "A short bio about yourself"
    };
  }
  handleInput = event => {
    this.setState({ bio: event.target.value });
  };
  render() {
    return (
      <>
        <div className="setting_main_container">
          <div className="section_name">
            {"Setting".split("").map(v => {
              return <div className="single_letter">{v}</div>;
            })}
          </div>
          <div className="setting_sub_container">
            <form className="setting_form">
              <input
                type="text"
                className="setting_imgrul"
                placeholder="Url of profile picture"
              ></input>
              <input
                type="text"
                className="setting_name"
                placeholder="name"
              ></input>
              <textarea
                type="text"
                className="setting_bio"
                value={this.state.bio}
                onChange={this.handleInput}
              >
                {" "}
              </textarea>
              <input
                type="text"
                className="setting_email"
                placeholder="email"
              ></input>
              <input
                type="text"
                className="setting_password"
                placeholder="password"
              ></input>
              <input
                type="submit"
                className="new_article_submit_btn"
                value="Update Setting"
              ></input>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Setting;
