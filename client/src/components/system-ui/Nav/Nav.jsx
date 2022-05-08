import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";
import ReedLogo from "../../svgs/ReedLogo";

const Nav = () => {
  const user = useContext(UserContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="primary-nav">
      <div className="nav-inner">
        <Link className="navbar-brand" to="/">
          {/* <img src="/logo.png" alt="logo" /> */}
          <div className="nav-container">
            <img src="/logo.png" alt="logo" width="50" />
          </div>
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
        {!user.isLoggedIn ? (
          <div className="nav-signup">
            <Link className="login" to="/login">
              Login
            </Link>
            <Link className="signup" to="/candidate/register">
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="user-avatar">Signed in</div>
        )}
      </div>
      <div className="mobile-nav">
        <div className="mobile-inner">
          <Link className="navbar-brand" to="/">
            {/* <img src="/logo.png" alt="logo" /> */}
            <div className="nav-container">
              <img src="/logo.png" alt="logo" width="50" />
            </div>
            In the Reeds
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>

        <div
          className="mobile-menu"
          style={{ display: mobileMenuOpen ? "block" : "none" }}
        >
          <ul>
            <li>
              <Link className="nav-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/search">
                Job Search
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/employer-area">
                {"Employer's Area"}
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav-item" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              {" "}
              {!user.isLoggedIn ? (
                <div className="nav-signup">
                  <Link className="login" to="/login">
                    Login
                  </Link>
                  <Link className="signup" to="/register">
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="user-avatar">Signed in</div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
