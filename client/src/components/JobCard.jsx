import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobCard = ({job}) => {
    return (
        <div className="job-card">
            <Link to={`/jobs/${job?.id}`}>
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex">
                      <div className="avatar avatar-xl bg-gradient-dark border-radius-md p-2">
                        <img src="./assets/img/tesla.png" alt="slack_logo" />
                      </div>
                      <div className="ms-3 my-auto">
                        <h6>{job?.position}</h6>
                      </div>
                    </div>
                    <p className="text-sm mt-3">{job?.user?.employer?.companyName}</p>
                    <hr className="horizontal dark" />
                    <div className="row">
                      <div className="col-6">
                        <h6 className="text-sm mb-0">London</h6>
                        <p className="text-secondary text-sm font-weight-bold mb-0">
                          {job?.location}
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <h6 className="text-sm mb-0">{job?.salary}</h6>
                        <p className="text-secondary text-sm font-weight-bold mb-0">
                          Salary
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </Link>
        </div>
    );
};

JobCard.propTypes = {
    job: PropTypes.object,
};

export default JobCard;