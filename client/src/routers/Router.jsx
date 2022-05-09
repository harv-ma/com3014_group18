import React from "react";
import { Routes, Route } from "react-router-dom";
import JobPage from "../pages/JobPage/JobPage";
import JobList from "../pages/JobList/JobList";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile/Profile";
import ContactPage from "../pages/ContactPage/ContactPage";
import Login from "../pages/Login/Login";
import EmployerArea from "../pages/EmployerArea/EmployerArea";
import CandidateArea from "../pages/CandidateArea/CandidateArea";
import CreateJob from "../pages/CreateJob/CreateJob";
import EditJob from "../pages/EditJob/EditJob";
import Register from "../pages/Register";
import EditProfile from "../pages/EditProfile";

const router = () => {
  return (
    <Routes>
      <Route path="/profile/:userId" exact element={<Profile />} />
      <Route path="/profile/edit" exact element={<EditProfile />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/candidate/register" exact element={<Register isEmployer={false} />} />
      <Route path="/employer/register" exact element={<Register isEmployer={true} />} />
      <Route path="/employer-area" exact element={<EmployerArea />} />
      <Route path="/candidate-area" exact element={<CandidateArea />} />
      <Route path="/" exact element={<JobList />} />
      <Route path="/jobs/create" exact element={<CreateJob />} />
      <Route path="/jobs/:jobId" exact element={<JobPage />} />
      <Route path="/jobs/:jobId/edit" exact element={<EditJob />} />
      <Route path="/contact" exact element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default router;
