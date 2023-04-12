import axios from 'axios';

export const getUsers = () => {
  return axios.get('/sky/users');
};
