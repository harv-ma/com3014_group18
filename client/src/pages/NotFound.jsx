import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main id="notfound">
      <div>
        <h1>404</h1>
        <span>The page you were trying to go to does not exist.</span>
        <Link to="/">Click here to go home</Link>
      </div>
    </main>
  );
};

export default NotFound;
