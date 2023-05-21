import axios from 'axios';

export const stateGet = (page, credentials) => {
  return axios.get(`/sky/locations/state?page=${page}`, credentials);
};
export const stateCteate = ({ name, country }) => {
  return axios.post(
    `/sky/locations/state?name%5Ben%5D=${name}&country_id=${country}`
  );
};
export const stateDelete = credentials => {
  return axios.delete(`/sky/locations/state/delete/${credentials}`);
};
