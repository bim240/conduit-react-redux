import React from "react";

class AricleDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null
    };
  }
  componentDidMount() {
    fetch(
      `https://conduit.productionready.io/api/articles/${this.props.match.params.slug}`
    )
      .then(res => res.json())
      .then(res => this.setState({ article: res }));
  }
  render() {
    var details = this.state.article;
    console.log(details);
    return (
      <>
        {" "}
        {this.state.article && (
          <section className="main_conatiner">
            <div className="sub_container">
              <div className="article_details_title">
                {" "}
                {details.article.title}
              </div>
              <div className="article_author_section">
                <div className="author_image">
                  {" "}
                  <img src={details.article.author.image} alt="img"></img>
                </div>
                <div className="author_details">
                  <div className="author_name">
                    {details.article.author.name}
                  </div>
                  <div className="article_date">
                    {details.article.updatedAt}
                  </div>
                </div>
                <div className="follow_section">
                  <button className="primary_btn">
                    {" "}
                    {details.article.author.following ? "Unfollow" : "Follow"}
                  </button>
                  <button className="primary_btn ">
                    {" "}
                    Favorited Article ({details.article.favoritesCount})
                  </button>
                </div>
              </div>
              <div className="content-section">{details.article.body}</div>
              <div className="comment_section">
                <textarea type="text" className="comment"></textarea>
                <div className=" comment_btn"> Comment</div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}

export default AricleDetails;
