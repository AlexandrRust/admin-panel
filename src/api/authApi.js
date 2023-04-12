import axios from 'axios';

export const authLogIn = credentials => {
  return axios.post('/pub/auths/login', credentials);
};

// export const authRegister = credentials => {
//   return axios.post('/users/signup', credentials);
// };

export const authLogOut = credentials => {
  return axios.post('/pub/auths/logout', credentials);
};

export const authCurrentUser = () => {
  return axios.get('/pub/auths/current');
};
