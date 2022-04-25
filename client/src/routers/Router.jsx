import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import JobPage from "../pages/JobPage/JobPage";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile/Profile";

const router = () => {
  return (
    <Routes>
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/" exact element={<Homepage />} />
      <Route path="/jobs/:job_id" exact element={<JobPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default router;
