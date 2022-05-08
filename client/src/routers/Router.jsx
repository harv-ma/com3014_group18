import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import JobPage from "../pages/JobPage/JobPage";
import JobList from "../pages/JobList/JobList";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile/Profile";
import ContactPage from "../pages/ContactPage/ContactPage";
import Login from "../pages/Login/Login";
import EmployerArea from "../pages/EmployerArea/EmployerArea";
import CreateJob from "../pages/CreateJob/CreateJob";
import Register from "../pages/Register";

const router = () => {
  return (
    <Routes>
      <Route path="/candidate-area" exact element={<Profile />} />
      <Route path="/login" exact element={<Login register={false} />} />
      <Route path="/candidate/register" exact element={<Register isEmployer={false} />} />
      <Route path="/employer/register" exact element={<Register isEmployer={true} />} />
      <Route path="/" exact element={<Homepage />} />
      <Route path="/employer-area" exact element={<EmployerArea />} />
      <Route path="/search" exact element={<JobList />} />
      <Route path="/jobs/create" exact element={<CreateJob />} />
      <Route path="/jobs/:jobId" exact element={<JobPage />} />
      <Route path="/contact" exact element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default router;
