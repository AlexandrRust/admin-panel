import axios from 'axios';

export const usersGet = () => {
  return axios.get('/sky/users');
};
