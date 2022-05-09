import Axios from "../axios.config";



export const getJobs = (query) => Axios.get(`/jobs?query=${query}`);
export const getJobsMine = () => Axios.get(`/jobs/mine`);
export const updateJob = (id, data) => Axios.put(`/jobs/${id}`, data);
export const deleteJob = (id) => Axios.delete(`/jobs/${id}`);
export const getJob = (id) => Axios.get(`/jobs/${id}/find`);
export const createJob = (data) => Axios.post('/jobs', data);
export const applyToJob = (id) => Axios.post(`/jobs/${id}/apply`);