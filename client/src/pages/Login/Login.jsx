import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Login.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Reeds from "../../components/svgs/Reeds";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <main id="login">
      <div className="login-container">
        <LoginForm /> 
      </div>
      <Reeds />
    </main>
  );
};


export default Login;
