import React, { useState } from "react";
import Button from "../../components/system-ui/Button/Button";
import DateInput from "../../components/system-ui/DateInput/DateInput";
import Dropdown from "../../components/system-ui/Dropdown/Dropdown";
import Input from "../../components/system-ui/Input/Input";
import NumberInput from "../../components/system-ui/NumberInput/NumberInput";
import Textarea from "../../components/system-ui/Textarea/Textarea";
import { useNavigate } from "react-router-dom";
import { createJob } from "../../services/job.service";

export default function CreateJob() {
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

  const inputUpdate = (e) => {
    setJobData({ ...jobData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = createJob(jobData);
      navigate(`jobs/${res.data.id}`);
      toast.success('Job created successfully');
    } catch(err) {
      toast.error(err.response?.data?.message ?? err.message);
    }
  };

  return (
    <main id="createjob">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Create Job Posting</h2>
        <Input
          label="Position Name"
          id="position"
          placeholder="Chief Financial Officer"
          callback={inputUpdate}
          required={true}
        />
        {/* Drop down select */}
        <Dropdown id="jobType" label="Job Type" callback={inputUpdate}>
          {jobTypes.map(jobType => (
              <option key={jobType} value={jobType}>{jobType}</option>
          ))}
          {/* <option value="flexible">Flexible</option> */}
        </Dropdown>
        {/* Textarea */}
        <Textarea label="Description" id="description" callback={inputUpdate} />
        <NumberInput
          label="Salary"
          id="salary"
          placeholder="12,000"
          callback={inputUpdate}
        />
        <Input
          label="Location"
          id="location"
          placeholder="London"
          callback={inputUpdate}
        />
        <DateInput label="Deadline" id="deadline" callback={inputUpdate} />
        <button type="submit" className="button mt-3" id="submit">
          { !loading ? 'Post Job' : 'Loading' }
        </button>
      </form>
    </main>
  );
}
