import React from "react";
import "./App.scss";
import Router from "./routers/Router";
import Nav from "./components/system-ui/Nav/Nav";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext";

// Default state
const user = {
  username: "NewUser1",
  password: "",
  avatar: "https://picsum.photos/id/1069/300/300",
};

const App = () => {
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Router />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
};

export default App;
