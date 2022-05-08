import React from "react";
import "./Login.scss";
import LoginForm from "./LoginForm";
import Reeds from "../../components/svgs/Reeds";

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
