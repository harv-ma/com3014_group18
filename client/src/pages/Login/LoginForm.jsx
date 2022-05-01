import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="login-form">
      <div>
        <label htmlFor="email">Email Address</label>
        <input id="email" placeholder="Email Address"></input>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password"></input>
        <button id="submit">Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
