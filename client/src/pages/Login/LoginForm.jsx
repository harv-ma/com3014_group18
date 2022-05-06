import React, { useState } from "react";
import Input from "../../components/system-ui/Input/Input";

const login = (state) => {
  console.log("Loggin in...", state);
};

const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputUpdate = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  return (
    <div className="login-form">
      <div>
        <Input
          id="email"
          label="Email Address"
          placeholder="Email Address"
          callback={inputUpdate}
        />
        <Input
          id="password"
          label="Password"
          placeholder="Password"
          callback={inputUpdate}
        />
        <button className="button" id="submit" onClick={() => login(state)}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
