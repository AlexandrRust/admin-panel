import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'api/api';
import { authCurrentUser, authLogIn } from 'api/authApi';

export const logIn = createAsyncThunk('/pub/auths/login', async credentials => {
  try {
    const { data } = await authLogIn(credentials);
    token.set(data.data.api_token);
    return data.data;
  } catch (error) {
    alert(error.response.data.errors.message);
    // toast.error(`${error.message}`);
  }
});

export const logOut = createAsyncThunk(
  '/pub/auths/logout',
  async credentials => {
    try {
      // await authLogOut(credentials);
      // console.log(credentials);
      token.unset();
    } catch (error) {
      if (error.response.status === 500) {
        console.log('Oops! Server error! Please try later!');
      } else {
        console.log('Something went wrong! Please reload the page!');
      }
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  '/pub/auths/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const { data } = await authCurrentUser();
      return data;
    } catch (error) {
      console.log('Authorization timed out! Please authenticate again!');
    }
  }
);
