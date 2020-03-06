import React from "react";

import Card from "./card";

const Cards = props => {
  return (
    <div className="list_big_container">
      {console.log(props.data[0])}
      <div className="today_heading">
        <h3 className="today">Today</h3>
        <span className="popular_new">POPULAR NEWEST</span>
      </div>
      <div className="container">
        {props.data.map(v => (
          <Card {...v} updatePopular={props.updatePopular} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
