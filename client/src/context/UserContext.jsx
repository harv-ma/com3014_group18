import React from "react";

const UserContext = React.createContext(
  {
    username: "",
    password: "",
    avatar: "",
  },
  {
    username: "NewUser1",
    password: "",
    avatar: "https://picsum.photos/id/1069/300/300",
  }
);

export default UserContext;
