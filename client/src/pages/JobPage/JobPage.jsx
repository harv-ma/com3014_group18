import React, { useEffect, useState } from "react";
import "./JobPage.scss";
import { Link, useParams } from "react-router-dom";
import { applyToJob, getJob } from "../../services/job.service";
import {toast} from "react-toastify";

const JobPage = () => {
  const { jobId } = useParams();
  const [loading, setLoading] = useState(false);
  const [applying, setApplying] = useState(false);
  const [job, setJob] = useState({})

  useEffect(() => {
    setLoading(true);
    getJob(jobId).then(res => setJob(res.data))
    .catch(err => toast.error(err.response?.data?.message ?? err.message));
    setLoading(false);
  }, [jobId]);

  const apply = async () => {
    setApplying(true);
    try {
      const res = applyToJob(jobId);
      toast.success(res.data?.message);
    } catch(err) {
      toast.error(err.response?.data?.message ?? err.message)
    }
    setApplying(false);
  }

  return (
    <main id="jobpage">
      <h2 className="sticky-title">
        <span>{job?.position}</span>
        {localStorage.getItem('access_token') && <button className="button" disabled={applying} onClick={() => apply()}> {!applying ? 'Apply Now' : <i className="fa fa-spinner fa-spin fa-fw"></i>}</button>}
      </h2>
      <div className="job-container">
        <div className="job-content">
          <div className="job-content__title">
            <div className="save-job"></div>
            <p>
              Posted by{" "}
              <Link to="/" className="link">
              {job?.user?.employer?.companyName}
              </Link>{" "}
              {job?.dateCreated}
            </p>
          </div>
          <div className="job-quick-details">
            <div className="job-quick-details__container">
              <ul>
                <li>
                  Salary <span>£{job?.salary} per annum</span>
                </li>
                <li>
                  Where <span>{job?.location}</span>
                </li>
                <li>
                  Type{" "}
                  <span>
                    <span className="badge bg-secondary">{job?.jobType}</span>
                  </span>
                </li>
                <li>
                  Date Posted <span>{job?.dateCreated}</span>
                </li>
              </ul>
              {/* <Share className="job-quick-details__share" /> */}
            </div>
          </div>
          <div className="job-content__description">{job?.description}</div>
        </div>
      </div>
      {/* <div className="related-jobs">Hi</div> */}
    </main>
  );
};

export default JobPage;
