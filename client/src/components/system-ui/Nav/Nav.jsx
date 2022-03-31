import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";

const Nav = () => {
  const user = useContext(UserContext);
  return (
    <nav className="primary-nav">
      <div className="nav-inner">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="logo" />
          In the Reeds
        </Link>
        <Link className="nav-item" to="/search">
          Job Search
        </Link>
        <Link className="nav-item" to="/employer-area">
          {"Employer's Area"}
        </Link>
        <Link className="nav-item" to="/contact">
          Contact Us
        </Link>
        {/* <Link className="navbar-profile" to="/profile">
          <span>{user.username}</span>
          <img src={user.avatar} alt="avatar" />
        </Link> */}
        <div className="nav-signup">
          <Link className="login" to="/login">
            Login
          </Link>
          <Link className="signup" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
