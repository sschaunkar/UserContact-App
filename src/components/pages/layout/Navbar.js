import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black ">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Contact App
        </NavLink>

        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-light" exact to="/adduser">
          Add User
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
