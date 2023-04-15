import { createSlice } from '@reduxjs/toolkit';
import { usersOperations } from './index';

const initialState = {
  usersList: [],
  title: null,
  btnTitle: null,
  roles: [],
  fields: [],
  perPage: null,
  currentPage: null,
  filterInput: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [usersOperations.getUsers.fulfilled](state, action) {
      console.log(action.payload);
      state.usersList = action.payload.items.data;
      state.fields = action.payload.fields;
      state.title = action.payload.static.title;
      state.btnTitle = action.payload.static.btnAction;
      state.roles = action.payload.roles;
      state.currentPage = action.payload.items.current_page;
      state.perPage = action.payload.items.per_page;
    },
    [usersOperations.addUser.fulfilled](state, action) {
      state.usersList = action.payload.items.data;
    },
    [usersOperations.getUserByNickName.fulfilled](state, action) {
      console.log(action.payload);
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
