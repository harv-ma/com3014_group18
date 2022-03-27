import axios from "axios";

// https://axios-http.com/docs/instance

const Client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});

export default Client;
