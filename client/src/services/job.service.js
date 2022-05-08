import Axios from "../axios.config";



export const getJobs = (page, size, query) => Axios.get(`/jobs?page=${page}&size=${size}&query=${query}`);
export const updateJob = (id, data) => Axios.put(`/jobs/${id}`, data);
export const deleteJob = (id) => Axios.delete(`/jobs/${id}`);
export const getJob = (id) => Axios.get(`/jobs/${id}`);
export const createJob = (data) => Axios.post('/jobs', data);
export const applyToJob = (id) => Axios.post(`/jobs/${id}/apply`);