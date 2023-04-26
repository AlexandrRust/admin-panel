import axios from 'axios';

export const rolesGet = (page, credentials) => {
  return axios.get(`/sky/roles?page=${page}`, credentials);
};
export const rolesCteate = ({ title, alias }) => {
  return axios.post(`/sky/roles/create?title=${title}&alias=${alias}`);
};
export const deleteRole = credentials => {
  return axios.delete(`sky/roles/delete/${credentials}`);
};
