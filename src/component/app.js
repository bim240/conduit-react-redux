import React from "react";
import Cards from "./cards";
import Header from "./header";
import Sidebar from "./sidebar";
import "./style.css";

var data = [
  {
    name: "Datawaves",
    description: "Add analytics to anything",
    tag: ["ANALYTICS", " DEVELOPER TOOLS"],
    img:
      "https://ph-files.imgix.net/d58fc63b-7ddf-4e5b-9a29-fb2f1162a05e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    popular: 45,
    id: 4
  },
  {
    name: "Makerlog 3.0",
    description: "The productive community for makers and indie hackers. ✨",
    tag: ["ANALYTICS", " DEVELOPER TOOLS"],
    img:
      "https://ph-files.imgix.net/00cc62e7-fbbf-40b4-be56-9a9d58579a47?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    popular: 78,
    id: 1
  },
  {
    name: "Flutter Dating",
    description: "The live Sunday dating app",
    tag: ["IPHONE", "DATING"],
    img:
      "https://ph-files.imgix.net/2a750d4a-ab47-4b84-a124-3acd044b8ed6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    popular: 55,
    id: 2
  },
  {
    name: "SaaS Landing Page",
    description: "The best SaaS landing page examples for design inspiration.",
    tag: ["DESIGN TOOLS", " DEVELOPER TOOLS"],
    img:
      "https://ph-files.imgix.net/ec8385c2-d317-4cf6-ac1a-e20c8d8f6b89?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    popular: 62,
    id: 3
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  updatePopular = id => {
    console.log("inside update");
    let updatedState = this.state.data.map(v => {
      if (v.id === id) {
        v.popular += 1;
      }
      return v;
    });
    this.setState({ data: updatedState });
  };

  addList = obj => {
    console.log({ ...obj });
    this.setState({ data: this.state.data.concat({ ...obj }) });
  };
  render() {
    return (
      <>
        <Header />
        <div className="second_section">
          <Cards data={this.state.data} updatePopular={this.updatePopular} />
          <Sidebar addList={this.addList} />
        </div>
      </>
    );
  }
}

export default App;
