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

export const roleFormGet = (id, credentials) => {
  return axios.get(`/sky/roles/form?role=${id}`, credentials);
};
export const roleUpdate = ({ title, alias, idRole }, credentials) => {
  return axios.put(
    `/sky/roles/update/${idRole}?role=${idRole}&title=${title}&alias=${alias}`,
    credentials
  );
};
