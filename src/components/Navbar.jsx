import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="navbar-brand" href="#">
        Github-search
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/" className="nav-item nav-link active">
            Home <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
