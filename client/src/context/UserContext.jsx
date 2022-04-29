import React from "react";

// Use -> const user = useContext(UserContext);
// to access

const UserContext = React.createContext(
  {
    username: "",
    password: "",
    avatar: "",
    isLoggedIn: false,
  },
  {
    username: "NewUser1",
    password: "",
    avatar: "https://picsum.photos/id/1069/300/300",
    isLoggedIn: false,
  }
);

export default UserContext;
