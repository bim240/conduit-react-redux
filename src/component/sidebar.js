import React from "react";
import ReactDOM from "react-dom";
import "../component/style.css";
var obj = {};
let data = [
  {
    img:
      "https://ph-avatars.imgix.net/1456069/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/826276/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/1440175/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/2422879/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/166755/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/1903430/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/2273447/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/17305/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/2097425/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/2245194/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://ph-avatars.imgix.net/2395344/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
  },
  {
    img:
      "https://assets.producthunt.com/assets/ef69a7f58217e3127550a35f5fc70764.png"
  },
  {
    img:
      "https://assets.producthunt.com/assets/ef69a7f58217e3127550a35f5fc70764.png"
  },
  {
    img:
      "https://assets.producthunt.com/assets/ef69a7f58217e3127550a35f5fc70764.png"
  },
  {
    img:
      "https://assets.producthunt.com/assets/ef69a7f58217e3127550a35f5fc70764.png"
  },
  {
    img:
      "https://assets.producthunt.com/assets/ef69a7f58217e3127550a35f5fc70764.png"
  },
  {
    img:
      "https://assets.producthunt.com/assets/ef69a7f58217e3127550a35f5fc70764.png"
  }
];

const Sidebar = props => {
  return (
    <div className="sidebar_maincontainer">
      <div>
        <h3 className="today">Makers working today</h3>
      </div>
      <div className="profile_container">
        <div className="img_container">
          {data.map(singleIMG => {
            return (
              <div className="profile_img">
                <img className="profile_img" src={singleIMG.img}></img>
              </div>
            );
          })}
        </div>
        <div>
          <p className="work_now">START WORKING NOW</p>
        </div>
      </div>
      <div className="sponsered_container">
        <h3 className="today">Product Hunt Radio</h3>
        <div className="sponsered_details">
          <div className="sponsered_text">
            How to grow and monetize communities with Jill Salzman
          </div>
          <div className="sponsered_image">
            <img src="data:image/jpeg;base64,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"></img>
          </div>
        </div>
      </div>
      <div className="newsletter_container">
        <div>
          <h3 className="today">Newsletter</h3>
        </div>
        <div className="newsletter_img">
          <img
            className="newsletter_img"
            src="https://ph-files.imgix.net/742f9303-ea31-4ab8-89fa-664e6be69029?auto=format&auto=compress&codec=mozjpeg&cs=strip"
          ></img>
        </div>
        <div>
          <p className="remote_teams">REMOTE TEAMS, THIS IS FOR YOU</p>
        </div>
        <div className="subscribe_container">
          <div>
            <h3 className="today subscribe_des">
              Get the best new products in your inbox, every day 👇
            </h3>
          </div>
          <div>
            <input
              type="text"
              className="search_bar subscribe_email"
              placeholder="Your Email"
            ></input>
          </div>
          <div>
            <button className="btn Signup subscribe">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="create_list_container">
        <div>
          <h3 className="today">Create a new item</h3>
        </div>
        <div className="form_container">
          <form>
            <label for="name"> Name</label>
            <input
              onChange={e => (obj.name = e.target.value)}
              type="text"
              id="name"
              className="search_bar subscribe_email"
              placeholder="Enter your name"
            ></input>
            <label for="description"> Description</label>
            <input
              onChange={e => (obj.description = e.target.value)}
              type="text"
              id="description"
              className="search_bar subscribe_email"
              placeholder="Enter description"
            ></input>
            <label for="tags"> Tags</label>
            <input
              onChange={e => (obj.tag = ["bim", 240])}
              type="text"
              id="tags"
              className="search_bar subscribe_email"
              placeholder="Enter tags"
            ></input>
            <label for="image"> Image Url</label>
            <input
              onChange={e => (obj.img = e.target.value)}
              type="text"
              id="image"
              className="search_bar subscribe_email"
              placeholder="Enter image url"
            ></input>
            <label for="popular"> Popular</label>
            <input
              onChange={e => (obj.popular = e.target.value)}
              type="text"
              id="popular"
              className="search_bar subscribe_email"
              placeholder="Enter Popularity"
            ></input>
          </form>
          <div>
            <button
              onClick={e => props.addList(obj)}
              className="btn Signup subscribe"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
