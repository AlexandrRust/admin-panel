import { createSlice } from '@reduxjs/toolkit';
import { rolesOperations } from './index';

const initialState = {
  rolesList: [],
  fields: [],
  static: {
    titlePage: '',
    btnTitle: '',
  },
  perPage: null,
  total: null,
  currentPage: null,
  isCreate: false,
  isUpdate: false,
};

export const authSlice = createSlice({
  name: 'roles',
  initialState,
  extraReducers: {
    [rolesOperations.getRoles.fulfilled](state, action) {
      state.rolesList = action.payload.res.items.data;
      state.static.titlePage = action.payload.res.static.title;
      state.static.btnTitle = action.payload.res.static.btnAction;
      state.fields = action.payload.res.fields;
      state.currentPage = action.payload.res.items.current_page;
      state.perPage = action.payload.res.items.per_page;
      state.total = action.payload.res.items.last_page;
    },
    [rolesOperations.addRoles.fulfilled](state, action) {
      state.rolesList = action.payload.res.items.data;
      state.static.titlePage = action.payload.res.static.title;
      state.static.btnTitle = action.payload.res.static.btnAction;
      state.fields = action.payload.res.fields;
      state.isCreate = true;
      state.currentPage = action.payload.res.items.current_page;
      state.perPage = action.payload.res.items.per_page;
      state.total = action.payload.res.items.last_page;
    },
    [rolesOperations.addRoles.rejected](state, action) {
      state.isCreate = false;
    },
    [rolesOperations.RoleDelete.fulfilled](state, action) {
      state.rolesList = action.payload.res.items.data;
      state.currentPage = action.payload.res.items.current_page;
      state.perPage = action.payload.res.items.per_page;
      state.total = action.payload.res.items.last_page;
    },
    [rolesOperations.getRoleForm.fulfilled](state, action) {
      state.fields = action.payload.res.fields;
    },
    [rolesOperations.updateRole.fulfilled](state, action) {
      state.isUpdate = true;
    },
    [rolesOperations.updateRole.rejected](state, action) {
      state.isUpdate = false;
    },
  },
});

export default authSlice.reducer;
