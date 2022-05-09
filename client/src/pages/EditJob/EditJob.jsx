import React, { useState, useEffect } from "react";
import Button from "../../components/system-ui/Button/Button";
import DateInput from "../../components/system-ui/DateInput/DateInput";
import Dropdown from "../../components/system-ui/Dropdown/Dropdown";
import Input from "../../components/system-ui/Input/Input";
import NumberInput from "../../components/system-ui/NumberInput/NumberInput";
import Textarea from "../../components/system-ui/Textarea/Textarea";
import { useNavigate, useParams } from "react-router-dom";
import { getJob, updateJob } from "../../services/job.service";
import {toast} from "react-toastify";

export default function EditJob() {
  const { jobId } = useParams();

  const jobTypes = ["FULL_TIME", "PART_TIME", "INTERNSHIP", "CONTRACT"]
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [jobData, setJobData] = useState({
    position: "",
    jobType: "",
    description: "",
    salary: 0,
    deadline: Date(),
    location: "",
  });

  useEffect(() => {
    setLoading(true);
    getJob(jobId).then(res => setJobData(res.data))
    .catch(err => toast.error(err.response?.data?.message ?? err.message));
    setLoading(false);
  }, [jobId])

  const inputUpdate = (e) => {
    setJobData({ ...jobData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = updateJob(jobId, jobData);
      navigate(`jobs/${res.data.id}`);
      toast.success('Job edited successfully');
    } catch(err) {
      toast.error(err.response?.data?.message ?? err.message);
    }
  };

  return (
    <main id="createjob">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Edit Job Posting</h2>
        <label className="input-label" htmlFor="position">Position Name</label>
        <input
          className="input-input"
          id="position"
          value={jobData.position}
          placeholder="Chief Financial Officer"
          onChange={inputUpdate}
        />
        <Dropdown id="jobType" label="Job Type" callback={inputUpdate}>
          {jobTypes.map(jobType => (
              <option key={jobType} value={jobType}>{jobType}</option>
          ))}
        </Dropdown>
        <Textarea label="Description" id="description" callback={inputUpdate} />
        <label className="input-label" htmlFor="salary">Salary</label>
        <input
          type="number"
          className="numberinput-input"
          id="salary"
          value={jobData.salary}
          placeholder="12,000"
          onChange={inputUpdate}
        />

        <label className="input-label" htmlFor="location">Location</label>
        <input
          className="input-input"
          id="location"
          value={jobData.location}
          placeholder="London"
          onChange={inputUpdate}
        />
        <label className="input-label" htmlFor="deadline">Deadline</label>
        <input
          type="date"
          className="input-input"
          id="deadline"
          value={jobData.deadline}
          placeholder="Deadline"
          onChange={inputUpdate}
        />
        <button type="submit" className="button mt-3" id="submit">
        {!loading ? 'Edit Job' : <i className="fa fa-spinner fa-spin fa-fw"></i>}
        </button>
      </form>
    </main>
  );
}
