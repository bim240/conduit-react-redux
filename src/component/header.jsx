import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaEdit, FaRegRegistered, FaUserAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { MdSettings } from "react-icons/md";

const Header = props => {
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

        {props.isLoggedIn ? (
          <>
            {/* add article */}
            <NavLink
              activeClassName="active_icon"
              to="/editor"
              className="colorful_circle1"
            >
              <div className="colorful_circle2">
                <div className="icon">
                  <IconContext.Provider value={{ className: "icon_shadow" }}>
                    <div>
                      <FaEdit />
                    </div>
                  </IconContext.Provider>
                </div>
              </div>
            </NavLink>
            {/* setting */}
            <NavLink
              activeClassName="active_icon"
              to="/setting"
              className="colorful_circle1"
            >
              <div className="colorful_circle2">
                <div className="icon">
                  <IconContext.Provider value={{ className: "icon_shadow" }}>
                    <div>
                      <MdSettings />
                    </div>
                  </IconContext.Provider>
                </div>
              </div>
            </NavLink>
            {/* user profile */}
            <NavLink
              activeClassName="active_icon"
              to="/user"
              className="colorful_circle1"
            >
              <div className="colorful_circle2">
                <div className="icon">
                  <IconContext.Provider value={{ className: "icon_shadow" }}>
                    <div>
                      <FaUserAlt />
                    </div>
                  </IconContext.Provider>
                </div>
              </div>
            </NavLink>
          </>
        ) : (
          <>
            {" "}
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
            {/* sign up btn*/}
            <NavLink
              activeClassName="active_icon"
              to="/signup"
              className="colorful_circle1"
            >
              <div className="colorful_circle2">
                <div className="icon">
                  <IconContext.Provider value={{ className: "icon_shadow" }}>
                    <div>
                      <FaRegRegistered />
                    </div>
                  </IconContext.Provider>
                </div>
              </div>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
