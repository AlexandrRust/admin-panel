import axios from 'axios';

export const countryGet = (page, credentials) => {
  return axios.get(`/sky/locations/country?page=${page}`, credentials);
};
