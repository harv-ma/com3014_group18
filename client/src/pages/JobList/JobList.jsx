import React from "react";
import Reeds from "../../components/svgs/Reeds";
import { Accordion, Button } from "react-bootstrap";
import "./JobList.scss";

const JobList = () => {
  return (
    <main id="joblist">
      <Reeds />
      <p>This is the Job search page!</p>
      <div className="search">
        <div className="inner">
          <label className="searchTitle">Job Title</label>
          <input placeholder="Teacher"></input>
          <label className="searchTitle">Around</label>
          <input placeholder="Guildford"></input>
          <button type="button" className="btn btn-primary">
            Search Now!
          </button>
        </div>
      </div>
      <p></p>
      <div className="JobsAccordion">
        <Accordion defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div id="container">
                <div id="left">Job Description #1</div>
                <div id="centre">Company</div>
                <div id="centre">Job Location</div>
                <div id="right">Job Salary</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div id="container">
                <div id="left">Job Description #2</div>
                <div id="centre">Company</div>
                <div id="centre">Job Location</div>
                <div id="right">Job Salary</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </main>
  );
};

export default JobList;
