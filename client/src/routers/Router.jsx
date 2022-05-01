import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import JobPage from "../pages/JobPage/JobPage";
import JobList from "../pages/JobList/JobList";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile/Profile";
import ContactPage from "../pages/ContactPage/ContactPage";
import Login from "../pages/Login/Login";

const router = () => {
  return (
    <Routes>
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/login" exact element={<Login register={false} />} />
      <Route path="/register" exact element={<Login register={true} />} />
      <Route path="/" exact element={<Homepage />} />
      <Route path="/search" exact element={<JobList />} />
      <Route path="/jobs/:job_id" exact element={<JobPage />} />
      <Route path="/contact" exact element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default router;
