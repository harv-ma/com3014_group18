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
          {/* <img src="https://picsum.photos/100/50" alt="logo"/> */}
          In the Reeds
        </Link>
        <Link className="nav-item" to="/">
          Home
        </Link>
        <Link className="nav-item" to="/">
          Link2
        </Link>
        <Link className="nav-item" to="/">
          Link3
        </Link>
        <Link className="navbar-profile" to="/profile">
          <span>{user.username}</span>
          <img src={user.avatar} alt="avatar" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
