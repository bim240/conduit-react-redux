import React from "react";

import "./style.css";
var Header = () => {
  return (
    <div className="main_container">
      <div className="header_container">
        <div className="header_sub_container">
          <div className="image_container">
            <img src="data:image/png;base64,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"></img>
          </div>
          <input
            type="text"
            className="search_bar"
            placeholder=" &#128270;   Discover your next favorite thing..."
          ></input>
          <nav className="nav_menu">
            <span>Deals</span>
            <span>Jobs</span>
            <span>Markers</span>
            <span>Radio</span>
            <span>Ship</span>
            <span>...</span>
          </nav>
        </div>
        <div>
          <button className="btn login">LOG IN</button>
          <button className="btn Signup">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
// ReactDOM.render(<Header />, document.getElementById(""));
