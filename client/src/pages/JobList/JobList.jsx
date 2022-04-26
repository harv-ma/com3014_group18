import React from "react";
import { Accordion} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< Updated upstream
=======
import Reeds from "../../components/svgs/Reeds";
>>>>>>> Stashed changes
import "./JobList.scss";

const JobList = () => {
    return (
        <main id="joblist">
<<<<<<< Updated upstream
            This is the Job search page!
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
=======
            <Reeds />
            <p>This is the Job search page!</p>
            <div className="JobsAccordion"> 
                <Accordion defaultActiveKey="0" alwaysOpen> 
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div id="container">
                                <div id="left">Job Description</div>
                                <div id="centre">Job Salary</div>
                                <div id= "right">Job Location</div>
                            </div>    
>>>>>>> Stashed changes
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
<<<<<<< Updated upstream
                        </Accordion.Body>
=======
                        </Accordion.Body> 
>>>>>>> Stashed changes
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </main>
    );
};

export default JobList;