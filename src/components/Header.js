import React from "react";
import { Link } from "react-router-dom";

const Header = ({ headerDetails }) => {
  return (
    <nav className="navbar" onClick={(e) => e.stopPropagation()}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img
            src={headerDetails.logoImage}
            alt="realtor logo"
            width="40"
            height="40"
          ></img>
        </Link>
        <div className="title">
          <h2>{headerDetails.title}</h2>
        </div>
      </div>

      <ul className={"nav-menu"}>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Welcome Sally
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
