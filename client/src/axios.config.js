import axios from "axios";


const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30 * 1000,
  headers: {
      ...axios.headers,
      "Content-Type": "application/json",
  }
});


Axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (localStorage.getItem("access_token") && error.message.includes("401")) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default Axios;