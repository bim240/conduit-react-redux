import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/header";
import Cards from "./component/cards";
import Sidebar from "./component/sidebar";

ReactDOM.render(<Cards />, document.getElementById("root"));
ReactDOM.render(<Sidebar />, document.getElementById("sidebar"));

ReactDOM.render(<Header />, document.getElementById("header"));
