import React from "react";

import Card from "./card";
import "./style.css";

var Data = [
  {
    name: "Datawaves",
    description: "Add analytics to anything",
    tag: ["ANALYTICS", " DEVELOPER TOOLS"],
    img:
      "https://ph-files.imgix.net/d58fc63b-7ddf-4e5b-9a29-fb2f1162a05e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    popular: 45
  },
  {
    name: "Makerlog 3.0",
    description: "The productive community for makers and indie hackers. ✨",
    tag: ["ANALYTICS", " DEVELOPER TOOLS"],
    img:
      "https://ph-files.imgix.net/00cc62e7-fbbf-40b4-be56-9a9d58579a47?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    popular: 78
  },
  {
    name: "Flutter Dating",
    description: "The live Sunday dating app",
    tag: ["IPHONE", "DATING"],
    img:
      "https://ph-files.imgix.net/2a750d4a-ab47-4b84-a124-3acd044b8ed6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    popular: 55
  },
  {
    name: "SaaS Landing Page",
    description: "The best SaaS landing page examples for design inspiration.",
    tag: ["DESIGN TOOLS", " DEVELOPER TOOLS"],
    img:
      "https://ph-files.imgix.net/ec8385c2-d317-4cf6-ac1a-e20c8d8f6b89?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    popular: 62
  }
];

const Cards = () => {
  return (
    <div className="list_big_container">
      <div className="today_heading">
        <h3 className="today">Today</h3>
        <span className="popular_new">POPULAR NEWEST</span>
      </div>
      <div className="container">
        {Data.map(v => (
          <Card {...v} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
