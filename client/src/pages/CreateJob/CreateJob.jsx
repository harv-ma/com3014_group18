import React, { useState } from "react";
import Button from "../../components/system-ui/Button/Button";
import DateInput from "../../components/system-ui/DateInput/DateInput";
import Dropdown from "../../components/system-ui/Dropdown/Dropdown";
import Input from "../../components/system-ui/Input/Input";
import NumberInput from "../../components/system-ui/NumberInput/NumberInput";
import Textarea from "../../components/system-ui/Textarea/Textarea";
import Client from "../../helpers/Client";
import { useNavigate } from "react-router-dom";

export default function CreateJob() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    position: "",
    jobType: "FULL_TIME",
    description: "",
    salary: 0,
    deadline: Date(),
    location: "",
  });

  const [errors, setErrors] = useState({});

  const inputUpdate = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const submit = () => {
    Client.post("/jobs", state)
      .then((res) => {
        navigate("/jobs/" + res.data.id);
      })
      .catch((e) => console.log(e));
  };

  return (
    <main id="createjob">
      <div className="form">
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
          <option value="FULL_TIME">Full Time</option>
          <option value="PART_TIME">Part Time</option>
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
        <Button label="Create Post" callback={submit} />
      </div>
    </main>
  );
}
