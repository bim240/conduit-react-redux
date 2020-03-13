import React from "react";
import Header from "./header";
import Article from "./article";
import Tag from "./tags";
import "../assets/stylesheets/main.scss";

const App = () => {
  return (
    <div className="home_page_devision">
      <Header /> <Article /> <Tag />
    </div>
  );
};

export default App;
