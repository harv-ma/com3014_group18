import React, { useState } from "react";

const RegisterForm = () => {
  return (
    <div className="register-form">
      <div>
        <label htmlFor="first-name">First Name *</label>
        <input id="first-name" placeholder="First Name"></input>
        <label htmlFor="last-name">Last Name *</label>
        <input id="last-name" placeholder="Last Name"></input>
        <label htmlFor="email">Email Address *</label>
        <input id="email" type="email" placeholder="Email Address"></input>
        <label htmlFor="password">New Password *</label>
        <input id="password" type="password" placeholder="Password"></input>
        <label htmlFor="confirm-password">Confirm Password *</label>
        <input
          id="confirm-password"
          type="password"
          placeholder="Confirm Password"
        ></input>
        <button id="submit">Register</button>
      </div>
    </div>
  );
};

export default RegisterForm;
