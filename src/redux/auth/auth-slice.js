import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './index';

const initialState = {
  user: {
    avatar: null,
    email: null,
    email_verification_token: null,
    email_verified_at: null,
    firstname: null,
    id: null,
    lastname: null,
    nickname: null,
    phone: null,
    status: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // [authOperations.register.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.api_token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = {
        avatar: null,
        email: null,
        email_verification_token: null,
        email_verified_at: null,
        firstname: null,
        id: null,
        lastname: null,
        nickname: null,
        phone: null,
        status: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [authOperations.getCurrentUser.pending](state, action) {
      state.isRefreshingUser = true;
    },
    [authOperations.getCurrentUser.rejected](state, action) {
      state.isRefreshingUser = false;
    },
  },
});

export default authSlice.reducer;
