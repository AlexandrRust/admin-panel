import axios from 'axios';

export const usersGet = (page, credentials) => {
  return axios.get(`/sky/users?page=${page}`, credentials);
};
export const userPost = credentials => {
  return axios.post('/sky/users/create', credentials);
};

export const userGetByNick = (nickName, credentials) => {
  return axios.get(`/sky/users/show/${nickName}`, credentials);
};
