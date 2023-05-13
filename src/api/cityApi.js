import axios from 'axios';

export const cityGet = (page, credentials) => {
  // ?page=${page}
  return axios.get(`/sky/locations/city`, credentials);
};
