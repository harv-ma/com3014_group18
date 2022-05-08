import React, { useEffect, useState } from "react";
import "./Homepage.scss";
import Reeds from "../../components/svgs/Reeds";
import Hero from "../../components/homepage/Hero";
import { getJobs } from "../../services/job.service";
import {toast} from "react-toastify";
import JobList from "../../components/homepage/JobList";


const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState({});

  useEffect(() => {
    setLoading(true);
    getJobs(page, 100, search)
    .then(res => setJobs(res.data))
    .catch(err => toast.error(err.response?.data?.message ?? err.message));
    setLoading(false);
  }, [page, search])

  return (
    <React.Fragment>
      <Reeds />
      <Hero handleSearch={e => setSearch(e.target.value)}/>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {!loading && <JobList jobs={jobs.content} /> }
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default Homepage;
