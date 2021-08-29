import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = ({ icon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        {" "}
        <i className={icon}></i>
        {title}
      </h1>
      <ul>
        <li>
          {" "}
          <Link to="/">Domů</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/about">O nás</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Gihub Finder",
  icon: "fab fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
