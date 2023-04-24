import { createSlice } from '@reduxjs/toolkit';
import { usersOperations } from './index';

const initialState = {
  usersList: [],
  userShow: {},
  title: null,
  btnTitle: null,
  roles: [],
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

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [usersOperations.getUsers.fulfilled](state, action) {
      console.log(action.payload.res.items.total);
      state.usersList = action.payload.res.items.data;
      state.fields = action.payload.res.fields;
      state.title = action.payload.res.static.title;
      state.btnTitle = action.payload.res.static.btnAction;
      state.roles = action.payload.res.roles;
      state.currentPage = action.payload.res.items.current_page;
      state.perPage = action.payload.res.items.per_page;
      state.total = action.payload.res.items.total;
      state.status = action.payload.status;
    },
    // [usersOperations.getUsers.pending](state, action) {
    //   console.log(action);
    // },
    [usersOperations.getUsers.rejected](state, action) {
      state.status = action.payload.status;
    },
    [usersOperations.addUser.fulfilled](state, action) {
      state.usersList = action.payload.res.items.data;
      state.status = action.payload.status;
      state.isCreate = true;
      state.isRefreshingUser = false;
      state.currentPage = action.payload.res.items.current_page;
      state.perPage = action.payload.res.items.per_page;
      state.total = action.payload.res.items.total;
    },
    [usersOperations.addUser.pending](state, action) {
      state.isRefreshingUser = true;
      // state.status = false;
    },
    [usersOperations.addUser.rejected](state, action) {
      state.isRefreshingUser = false;
      state.isCreate = false;
      // state.status = action.payload.status;
    },
    [usersOperations.getUserByNickName.fulfilled](state, action) {
      console.log(action.payload);
      state.usersList = action.payload.res.items.data;
      state.fields = action.payload.res.fields;
      state.title = action.payload.res.static.title;
      state.btnTitle = action.payload.res.static.btnAction;
      state.roles = action.payload.res.roles;
      state.currentPage = action.payload.res.items.current_page;
      state.total = action.payload.res.items.total;
      state.perPage = action.payload.res.items.per_page;
      state.status = action.payload.status;
      state.isUpdate = false;
    },
    [usersOperations.UserFormGet.fulfilled](state, action) {
      console.log(action.payload);
      state.status = action.payload.status;
      state.fields = action.payload.res.fields;
    },
    [usersOperations.userUpdate.fulfilled](state, action) {
      state.isUpdate = true;
    },
    [usersOperations.userUpdate.rejected](state, action) {
      state.isUpdate = false;
    },
    [usersOperations.UserDelete.fulfilled](state, action) {
      state.usersList = action.payload.res.items.data;
    },
    [usersOperations.getUserShow.fulfilled](state, action) {
      state.userShow = action.payload.res.item;
    },

    // // [authOperations.register.fulfilled](state, action) {
    // //   state.user = action.payload.user;
    // //   state.token = action.payload.token;
    // //   state.isLoggedIn = true;
    // // },
    // [authOperations.logIn.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.api_token;
    //   state.isLoggedIn = true;
    // },
    // [authOperations.logOut.fulfilled](state) {
    //   state.user = {
    //     avatar: null,
    //     email: null,
    //     email_verification_token: null,
    //     email_verified_at: null,
    //     firstname: null,
    //     id: null,
    //     lastname: null,
    //     nickname: null,
    //     phone: null,
    //     status: null,
    //   };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // },
    // [authOperations.getCurrentUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isRefreshingUser = false;
    // },
    // [authOperations.getCurrentUser.pending](state, action) {
    //   state.isRefreshingUser = true;
    // },
    // [authOperations.getCurrentUser.rejected](state, action) {
    //   state.isRefreshingUser = false;
    // },
  },
  reducers: {
    addFilterInput: (state, action) => {
      state.filterInput = action.payload;
    },
  },
});

export const { addFilterInput } = usersSlice.actions;

export default usersSlice.reducer;
