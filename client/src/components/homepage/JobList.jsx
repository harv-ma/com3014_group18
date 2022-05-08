import React from "react";
import PropTypes from "prop-types";
import JobCard from "./JobCard";


const JobList = ({jobs}) => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12 me-auto text-left">
                    <h2 className="text-center">Check out our amazing opportuinities</h2>
                </div>
            </div>
            <div className="row mt-lg-4 mt-2">
                {jobs && jobs.map(job => (
                    <div className="col-lg-4 col-md-6 mb-4" key={job.id}>
                        <JobCard job={job} />
                    </div>       
                ))}
            </div>
        </div>
    );
};

JobList.propTypes = {
    jobs: PropTypes.array,
}

export default JobList;
