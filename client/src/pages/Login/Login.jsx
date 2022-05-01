import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Login.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Reeds from "../../components/svgs/Reeds";
import { Link } from "react-router-dom";

const Login = ({ register }) => {
  register = register ? "register" : "login";

  const [tab, setTab] = useState(register);

  useEffect(() => {
    setTab(register);
  }, [register]);

  return (
    <main id="login">
      <div className="login-container">
        <div className="tab-container">
          <nav className="tabs">
            <div
              className={tab == "login" ? "selected" : "login-shadow"}
              onClick={() => setTab("login")}
            >
              Login
            </div>
            <div
              className={tab == "register" ? "selected" : "register-shadow"}
              onClick={() => setTab("register")}
            >
              Register
            </div>
          </nav>
          <div className="form">
            {tab == "login" ? <LoginForm /> : <RegisterForm />}
          </div>
          <div className="business-text">
            <p>Are you a business owner?</p>
            <Link to="/">{"Employer Area"}</Link>
          </div>
        </div>
      </div>
      <Reeds />
    </main>
  );
};

Login.propTypes = {
  register: PropTypes.bool,
};

export default Login;
