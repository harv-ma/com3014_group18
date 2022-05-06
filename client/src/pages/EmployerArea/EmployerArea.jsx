import React from "react";
import "./EmployerArea.scss";
import "../JobList/JobList.scss";
import { Accordion } from "react-bootstrap";

const EmployerArea = () => {
  return (
  <main id="EmployerArea">
    <div className="detailsBox">
      <div><img src="https://picsum.photos/150/150" alt="avatar" /></div>
      <div className="detailsText">
        <div className="title">(Company Name)</div>
        <div className="subtitle">Address: (Very Long Address that pushes things far to the right, even farther than that to right please)</div>
        <div className="subtitle">Phone Number: (Phone Number)</div>
        <div className="subtitle">Website: (Website)</div>
      </div>
      <button>Update Details</button>
    </div>
    <div className="title">Company Description</div>
    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute
        irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim idest laborum.
    </div>
    <p></p>
    <div className="title">Account</div>
    <div className="subtitle">Email: (Email)</div>
    <div className="subtitle">Password: **********</div>
    <p></p>
    <div className="title">Jobs Open</div>
    <div className="JobsAccordion">
                <Accordion defaultActiveKey="0" alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div id="container">
                                <div id="left">Job Description #1</div>
                                <div id="centre">Job Location</div>
                                <div id="right">Applications: #</div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            <p></p>
                            <button>See more</button>
                            <p></p>
                            <div className="ApplicantsAccordion">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <div id="container">
                                                <div id="left">Applicant 1 Name</div>
                                                <div id="right">Job Title</div>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                            <p></p>
                                            <button>See application</button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div id="container">
                                                <div id="left">Applicant 2 Name</div>
                                                <div id="right">Job Title</div>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                            <p></p>
                                            <button>See application</button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div id="container">
                                <div id="left">Job Description #2</div>
                                <div id="centre">Job Location</div>
                                <div id="right">Applications: #</div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.

                        <p></p>
                        <button>See more</button>
                        <p></p>

                        <div className="ApplicantsAccordion">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <div id="container">
                                                <div id="left">Applicant 1 Name</div>
                                                <div id="right">Job Title</div>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                            <p></p>
                                            <button>See application</button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div id="container">
                                                <div id="left">Applicant 2 Name</div>
                                                <div id="right">Job Title</div>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                            <p></p>
                                            <button>See application</button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
  </main>);
};

export default EmployerArea;