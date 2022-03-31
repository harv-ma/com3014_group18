import React from "react";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <main id="homepage">
      <div className="home-intro">
        <div>
          <img src="https://picsum.photos/300/300" alt="logo" />
          <h1>Job finding made easy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            blandit hendrerit nisi. Praesent libero leo, consectetur sit amet
            blandit in, eleifend eu dolor.
          </p>
        </div>
        <div>
          <img src="https://picsum.photos/500/600" alt="site" />
        </div>
      </div>
    </main>
  );
};

export default Homepage;
