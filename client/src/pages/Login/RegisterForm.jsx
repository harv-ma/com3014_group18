import React, { useState } from "react";
import Input from "../../components/system-ui/Input/Input";

const register = (state) => {
  console.log("Registering...", state);
};

const RegisterForm = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const inputUpdate = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  return (
    <div className="register-form">
      <div>
        <Input
          id="first_name"
          label="First Name *"
          placeholder="First Name"
          callback={inputUpdate}
        />
        <Input
          id="last_name"
          label="Last Name *"
          placeholder="Last Name"
          callback={inputUpdate}
        />
        <Input
          id="email"
          label="Email Address *"
          placeholder="Email Address"
          callback={inputUpdate}
        />
        <Input
          id="password"
          label="New Password *"
          placeholder="Password"
          callback={inputUpdate}
        />
        <Input
          id="confirm_password"
          label="Confirm Password *"
          placeholder="Confirm Password"
          callback={inputUpdate}
        />
        <button className="button" id="submit" onClick={() => register(state)}>
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
