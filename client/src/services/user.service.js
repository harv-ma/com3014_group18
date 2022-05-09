import Axios from "../axios.config";


export const login = (data) => Axios.post('/users/login', data);
export const register = (data) => Axios.post('/users', data);
export const getProfile = () => Axios.get('/users/profile');
export const updateProfile = (data) => Axios.put('/users', data);
export const uploadAvatar = (data) => Axios.post('/users/upload-avatar', data);
export const uploadResume = (data) => Axios.post('/users/candidate/upload-resume', data);
export const findUser = (id) => Axios.get(`/users/${id}/find`);
export const deleteUser = (id) => Axios.delete(`/users/${id}`);
export const changePassword = (data) => Axios.post('/users/change-password', data);