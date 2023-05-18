import axios from 'axios';

export const cityGet = (page, credentials) => {
  return axios.get(`/sky/locations/city?page=${page}`, credentials);
};

export const cityCteate = ({ name, state }) => {
  // locations/city?name%5Ben%5D=fer&name%5Bjp%5D=fer
  return axios.post(
    `/sky/locations/city?name%5Ben%5D=${name}&state_id=${state}`
  );
};
export const cityDelete = credentials => {
  return axios.delete(`/sky/locations/city/delete/${credentials}`);
};
