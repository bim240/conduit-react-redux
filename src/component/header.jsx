import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";

const Header = () => {
  return (
    <div className="header">
      {/* <h1>header section</h1> */}
      <div className="header_subcontainer">
        {/* home icon */}
        <NavLink
          activeClassName="active_icon"
          to="/"
          className="colorful_circle1"
        >
          <div className="colorful_circle2">
            <div className="icon">
              <IconContext.Provider value={{ className: "icon_shadow" }}>
                <div>
                  <FaHome />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </NavLink>
        {/* login btn */}
        <NavLink
          activeClassName="active_icon"
          to="/login"
          className="colorful_circle1"
        >
          <div className="colorful_circle2">
            <div className="icon">
              <IconContext.Provider value={{ className: "icon_shadow" }}>
                <div>
                  <IoMdLogIn />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </NavLink>
        {/* sign up ben*/}
        <NavLink
          activeClassName="active_icon"
          to="/signup"
          className="colorful_circle1"
        >
          <div className="colorful_circle2">
            <div className="icon">
              <IconContext.Provider value={{ className: "icon_shadow" }}>
                <div>
                  <IoMdLogOut />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;