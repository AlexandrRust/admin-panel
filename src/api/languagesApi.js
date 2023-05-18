import axios from 'axios';

export const languagesGet = (page, credentials) => {
  return axios.get(`/sky/locations/languages?page=${page}`, credentials);
};
export const languagesCteate = ({ name, code, shortcode }) => {
  return axios.post(
    `/sky/locations/languages?name%5Ben%5D=${name}&code=${code}&shortcode=${shortcode}`
  );
};
export const languagesDelete = credentials => {
  return axios.delete(`/sky/locations/languages/delete/${credentials}`);
};
