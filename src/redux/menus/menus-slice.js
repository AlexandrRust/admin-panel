import { createSlice } from '@reduxjs/toolkit';
import { menusOperations } from './index';

const initialState = {
  menusList: [],
  title: null,
  btnTitle: null,
  fields: [],
  perPage: null,
  total: null,
  currentPage: null,
  filterInput: '',
  status: false,
  isCreate: false,
  isUpdate: false,
  isRefreshingUser: false,
};

export const menusSlice = createSlice({
  name: 'menus',
  initialState,
  extraReducers: {
    [menusOperations.getMenus.fulfilled](state, action) {
      state.menusList = action.payload.res.items.data;
      state.fields = action.payload.res.fields;
      state.title = action.payload.res.static.title;
      state.btnTitle = action.payload.res.static.btnAction;
      // state.roles = action.payload.res.roles;
      state.currentPage = action.payload.res.items.current_page;
      state.perPage = action.payload.res.items.per_page;
      state.total = action.payload.res.items.last_page;
      state.status = action.payload.status;
      state.isCreate = false;
      state.isUpdate = false;
    },
    [menusOperations.addMenus.fulfilled](state, action) {
      // state.menusList = action.payload.res.items.data;
      // state.title = action.payload.res.static.title;
      // state.btnTitle = action.payload.res.static.btnAction;
      // state.fields = action.payload.res.fields;
      state.isCreate = true;
      // state.currentPage = action.payload.res.items.current_page;
      // state.perPage = action.payload.res.items.per_page;
      // state.total = action.payload.res.items.last_page;
    },
    [menusOperations.addMenus.rejected](state, action) {
      state.isCreate = false;
    },
    [menusOperations.menusDelete.fulfilled](state, action) {
      state.menusList = action.payload.res.items.data;
      state.currentPage = action.payload.res.items.current_page;
      state.perPage = action.payload.res.items.per_page;
      state.total = action.payload.res.items.last_page;
    },
    [menusOperations.getMenusFrom.fulfilled](state, action) {
      state.fields = action.payload.res.fields;
    },
  },
});

export default menusSlice.reducer;
