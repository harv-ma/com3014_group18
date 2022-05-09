import Axios from "../axios.config";



export const manageApplication = (id, status) => Axios.post(`/applications/${id}?status=${status}`);
export const myApplication = () => Axios.get(`/applications`);
