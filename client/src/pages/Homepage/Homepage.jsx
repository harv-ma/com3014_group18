import React, { useEffect, useState } from "react";
import "./Homepage.scss";
import { CSSTransition } from "react-transition-group";
import Reeds from "../../components/svgs/Reeds";
import Hero from "../../components/homepage/Hero";
import { getJobs } from "../../services/job.service";
import {toast} from "react-toastify";


const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState([]);

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
    </React.Fragment>
  );
};

export default Homepage;
