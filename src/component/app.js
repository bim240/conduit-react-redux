import React from "react";
import Cards from "./cards";
import Header from "./header";
import Sidebar from "./sidebar";
import "./style.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="second_section">
        <Cards />
        <Sidebar />
      </div>
    </>
  );
};

export default App;
