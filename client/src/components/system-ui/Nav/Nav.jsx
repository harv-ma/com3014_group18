import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";

const Nav = () => {
  const user = useContext(UserContext);

  // console.log(user)

  return (
    <nav className="primary-nav">
      <Link class="navbar-brand" to="/">
        {/* <img src="https://picsum.photos/100/50" alt="logo"/> */}
        In the Reeds
      </Link>
      <Link to="/">Home</Link>
      <Link class="navbar-profile" to="/profile">
        <img src={user.avatar} alt="avatar" width="40" height="40" />
      </Link>
    </nav>
  );
};

export default Nav;
