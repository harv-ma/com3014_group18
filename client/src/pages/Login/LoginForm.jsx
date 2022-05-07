import React, { useEffect, useState } from "react";
import Input from "../../components/system-ui/Input/Input";
import Client from "../../helpers/Client";

const login = (state) => {
  Client.get("/jobs?page=0&size=10&query=and")
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
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
        <button id="submit" onClick={() => login(state)}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
