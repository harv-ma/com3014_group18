import React, { useEffect, useState } from "react";
import "./JobPage.scss";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/system-ui/Button/Button";
import Share from "../../components/system-ui/Share/Share";
import Client from "../../helpers/Client";

const JobPage = () => {
  const { job_id } = useParams();

  const [state, setState] = useState();

  const getJob = () => {
    return Client.get("/jobs/" + job_id)
      .then((res) => {
        return res.data;
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getJob().then((data) => setState(data));
  }, []);

  console.log("state", state);

  if (!state) {
    return "Error loading page";
  }

  return (
    <main id="jobpage">
      <h2 className="sticky-title">
        <span>{state?.position}</span>
        <Button label="Apply Now" to="/" />
      </h2>
      <div className="job-container">
        <div className="job-content">
          <div className="job-content__title">
            <div className="save-job"></div>
            <p>
              Posted by{" "}
              <Link to="/" className="link">
                Flight Global
              </Link>{" "}
              on Monday 8th March
            </p>
          </div>
          <div className="job-quick-details">
            <div className="job-quick-details__container">
              <ul>
                <li>
                  Salary <span>£{state?.salary} per annum</span>
                </li>
                <li>
                  Where <span>{state?.location}</span>
                </li>
                <li>
                  Type{" "}
                  <span>
                    {state?.jobType == "FULL_TIME" ? "Full Time" : "Part Time"}
                  </span>
                </li>
                <li>
                  Date Posted <span>8th March 2022</span>
                </li>
              </ul>
              {/* <Share className="job-quick-details__share" /> */}
            </div>
          </div>
          <div className="job-content__description">{state?.description}</div>
        </div>
      </div>
      {/* <div className="related-jobs">Hi</div> */}
    </main>
  );
};

export default JobPage;
