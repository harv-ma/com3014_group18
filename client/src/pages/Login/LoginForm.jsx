import React, { useState } from "react";
import Input from "../../components/system-ui/Input/Input";
import { getProfile, login } from "../../services/user.service";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  let navigate = useNavigate();

  const [loginData, setLoginData] = useState({email: "", password: "",});
  const [loading, setLoading] = useState(false);


  const inputUpdate = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
      const response = await login(loginData);
      localStorage.setItem('access_token',response?.data?.access_token);
      const userProfile = await getProfile();
      localStorage.setItem('user', JSON.stringify(userProfile.data));
      navigate('/', {replace: true});
      toast.success('Login successful');
    } catch(error) {
      toast.error(error.response?.data?.message ?? error.message);
    }
    setLoading(false);
  }


  return (
    <form className="login-form" onSubmit={handleSubmit}>
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
        <button disabled={loading} type="submit" className="button" id="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
