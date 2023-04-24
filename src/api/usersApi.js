import axios from 'axios';

export const usersGet = (page, credentials) => {
  return axios.get(`/sky/users?page=${page}`, credentials);
};
export const userPost = credentials => {
  return axios.post('/sky/users/create', credentials);
};

export const userGetByNick = ({ nickName, role }, credentials) => {
  return axios.get(`/sky/users?search=${nickName}&role=${role}`, credentials);
};
export const userGetShow = ({ nickName }, credentials) => {
  console.log(nickName);
  return axios.get(`/sky/users/show/${nickName}`, credentials);
};
export const getUserForm = credentials => {
  return axios.get(`sky/users/form?user=${credentials}`);
};
export const updateUser = (
  { firstname, lastname, email, phone, password, nickName },
  credentials
) => {
  console.log(firstname);
  return axios.put(
    `sky/users/update/${nickName}?firstname=${firstname}&lastname=${lastname}&email=${email}&phone=${phone}&password=${password}`
  );
};

export const deleteUser = credentials => {
  return axios.delete(`sky/users/delete/${credentials}`);
};
