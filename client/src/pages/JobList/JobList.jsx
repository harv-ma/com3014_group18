import React, {useState, useEffect} from "react";
import Reeds from "../../components/svgs/Reeds";
import { Accordion} from "react-bootstrap";
import "./JobList.scss";
import Hero from "./Hero";
import { getJobs } from "../../services/job.service";
import {toast} from "react-toastify";
import { Link } from "react-router-dom";


const JobList = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getJobs(search)
    .then(res => setJobs(res.data))
    .catch(err => toast.error(err.response?.data?.message ?? err.message));
    setLoading(false);
  }, [search]);

  return (
    <React.Fragment>
    <Hero handleSearch={e => setSearch(e.target.value)}/>
    <main id="joblist">
      <Reeds />
      <div className="row mt-5">
                <div className="col-md-12 me-auto text-left">
                    <h2 className="text-center">Check out our Amazing Opportuinities</h2>
                    <hr />
                </div>
            </div>
      <p></p>
      <div className="JobsAccordion">
        <Accordion defaultActiveKey="0" alwaysOpen>
          {(!loading && jobs) && jobs?.map((job, index) => (
          <Accordion.Item eventKey={`${index}`} key={index}>
            <Accordion.Header>
              <div id="container">
                <div id="left"><strong>{job?.position}</strong></div>
                <div id="centre">{job?.user?.employer?.companyName ?? 'Facebook Inc.'}</div>
                <div id="centre"><span className="badge bg-secondary">{job?.jobType}</span></div>
                <div id="centre">{job?.location}</div>
                <div id="right">£{job?.salary}</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              {job?.description}
              <br></br>
              <Link className="btn btn-primary mt-3" to={`/jobs/${job?.id}`} style={{textDecoration: 'none'}}>See job details</Link>
            </Accordion.Body>
          </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </main>
    </React.Fragment>

  );
};

export default JobList;
