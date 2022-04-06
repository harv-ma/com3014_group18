import React, { useEffect, useState } from "react";
import "./Homepage.scss";
import { CSSTransition } from "react-transition-group";
import Reeds from "../../components/svgs/Reeds";

const Homepage = () => {
  const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVisible(!visible);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [visible]);

  return (
    <main id="homepage">
      <Reeds />
      <div className="home-intro">
        <div className="text">
          <CSSTransition in={visible} timeout={1000} classNames="intro-fade-in">
            <h1>
              Job <span>{visible ? "finding" : "recruiting"}</span> made easy
            </h1>
          </CSSTransition>

          <p>
            Whether you’re on the look out for your next full-time/part-time
            job, or wanting to reach out to the hundreds of potential candidates
            for your vacancies - this is the place for you.
          </p>
        </div>
        <div className="search">
          <div className="inner">
            <label>Job Title</label>
            <input placeholder="Teacher"></input>
            <label>Around</label>
            <input placeholder="Guildford"></input>
            <button>Search Now!</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
