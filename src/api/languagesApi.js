import axios from 'axios';

export const languagesGet = (page, credentials) => {
  return axios.get(`/sky/locations/languages?page=${page}`, credentials);
};
