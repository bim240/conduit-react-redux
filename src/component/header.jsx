import React from "react";
import { FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";

const Header = () => {
  return (
    <div className="header">
      {/* <h1>header section</h1> */}
      <div className="header_subcontainer">
        {/* first icon */}
        <div className="colorful_circle1">
          <div className="colorful_circle2">
            <div className="icon">
              <IconContext.Provider value={{ className: "icon_shadow" }}>
                <div>
                  <FaHome />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        {/* login btn */}
        <div className="colorful_circle1">
          <div className="colorful_circle2">
            <div className="icon">
              <IconContext.Provider value={{ className: "icon_shadow" }}>
                <div>
                  <IoMdLogIn />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        {/* sign up ben*/}
        <div className="colorful_circle1">
          <div className="colorful_circle2">
            <div className="icon">
              <IconContext.Provider value={{ className: "icon_shadow" }}>
                <div>
                  <IoMdLogOut />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
