import React from "react";

class AricleDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      following: this.article && this.state.article.article.author.following,
      comments: []
    };
    this.comment = React.createRef(null);
  }

  handleComment = () => {
    fetch(
      `https://conduit.productionready.io/api/articles/${this.props.match.params.slug}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          authorization: `Token ${localStorage["conduit-token"]}`
        },
        body: JSON.stringify({
          comment: {
            body: this.comment.current.value
          }
        })
      }
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ comments: this.state.comments.concat(res.comment) });
        this.comment.current.value = "";
      });
  };
  handleFollow = () => {
    if (!this.state.article.article.author.following) {
      fetch(
        `https://conduit.productionready.io/api/profiles/txtest123/follow`,
        {
          method: "POST",
          headers: {
            authorization: `Token ${localStorage["conduit-token"]}`
          }
        }
      )
        .then(res => res.json())
        .then(res => this.setState({ following: true }));
    }
    fetch(`https://conduit.productionready.io/api/profiles/txtest123/follow`, {
      method: "DELETE",
      headers: {
        authorization: `Token ${localStorage["conduit-token"]}`
      }
    })
      .then(res => res.json())
      .then(res => this.setState({ following: false }));
  };
  componentDidMount() {
    // article details
    fetch(
      `https://conduit.productionready.io/api/articles/${this.props.match.params.slug}`
    )
      .then(res => res.json())
      .then(res => this.setState({ article: res }));
    // comments
    fetch(
      `https://conduit.productionready.io/api/articles/${this.props.match.params.slug}/comments`,
      {
        method: "GET",
        headers: {
          authorization: `Token ${localStorage["conduit-token"]}`
        }
      }
    )
      .then(res => res.json())
      .then(res =>
        this.setState({ comments: this.state.comments.concat(res.comments) })
      );
  }
  render() {
    var details = this.state.article;
    console.log(this.state.comments);
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
                    {details.article.author.username}
                  </div>
                  <div className="article_date">
                    {details.article.updatedAt}
                  </div>
                </div>
                <div className="follow_section">
                  <button onClick={this.handleFollow} className="primary_btn">
                    {" "}
                    {this.state.following ? "Unfollow" : "Follow"}
                  </button>
                  <button className="primary_btn ">
                    {" "}
                    Favorited Article ({details.article.favoritesCount})
                  </button>
                </div>
              </div>
              <div className="content-section">{details.article.body}</div>
              <div className="comment_section">
                <div className="comment_heading">Comments</div>
                <div className="old_comments">
                  {this.state.comments.length > 0 ? (
                    this.state.comments.map(comment => {
                      return (
                        <>
                          <div className="single_comment">
                            <div className="commenter_image">
                              <img src={comment.author.image} alt="i" />
                            </div>
                            <div className="comment_content">
                              <div className="commenter_name">
                                {comment.author.username}
                              </div>
                              <div className="comment_body">{comment.body}</div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <>
                      <h1>no comments</h1>
                    </>
                  )}
                </div>
                <textarea
                  type="text"
                  className="comment"
                  ref={this.comment}
                ></textarea>
                <div onClick={this.handleComment} className=" comment_btn">
                  {" "}
                  Comment
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}

export default AricleDetails;
