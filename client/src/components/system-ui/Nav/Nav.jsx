import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    navigate(0);
    toast.success('Logout successful');
  }

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
        <Link className="nav-item" to="/contact">
            Contact Us
          </Link>
        {localStorage.getItem('access_token') &&
        <>
          {user?.userType === 'EMPLOYER' && <Link className="nav-item" to="/employer-area">
            Employer Area
          </Link>}
          {user?.userType === 'CANDIDATE' && <Link className="nav-item" to="/candidate-area">
            Candidate Area
          </Link>}
          {user?.userType === 'EMPLOYER' && <Link className="btn btn-primary" to="/jobs/create">
              Post a Job
           </Link>}
           <button className="btn btn-danger" onClick={() => logout()}>
              Log Out
           </button>
        </>
        }
        {!localStorage.getItem('access_token') && (
          <div className="nav-signup">
            <Link className="login" to="/login">
              Login
            </Link>
            <Link className="signup" to="/candidate/register">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
