import React from "react";
import "./Login.scss";
import LoginForm from "./LoginForm";
import Reeds from "../../components/svgs/Reeds";

const Login = () => {

  return (
    <main id="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card mt-5">
              <div className="card-body">
              <LoginForm /> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reeds />
    </main>
  );
};


export default Login;
