import axios from 'axios';

export const menusGet = (page, credentials) => {
  return axios.get(`/sky/menus?page=${page}`, credentials);
};

export const menusCteate = ({ title, path, parent, type }) => {
  return axios.post(
    `/sky/menus/create?title=${title}&path=${path}&parent=${parent}&type=${type}&sort_order=1`
  );
};
export const deleteMenus = credentials => {
  return axios.delete(`sky/menus/delete/${credentials}`);
};

export const menusFormGet = (id, credentials) => {
  return axios.get(`/sky/menus/form?menu=${id}`, credentials);
};
export const menusUpdate = (
  { idMenus, parent, path, sortOrder, title, type },
  credentials
) => {
  return axios.put(
    `sky/menus/update/${idMenus}?title=${title}&path=${path}&parent=${parent}&type=${type}&sort_order=${sortOrder}`,
    credentials
  );
};
// sky/menus/update/52?title=fer&path=fer&parent=1&type=admin&sort_order=1
