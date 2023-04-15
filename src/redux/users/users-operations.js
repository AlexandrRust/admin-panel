import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersGet, userPost, userGetByNick } from 'api/usersApi';
import { token } from 'api/api';

export const getUsers = createAsyncThunk(
  '/sky/users',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await usersGet(credentials);
      return data.data;
    } catch (error) {
      alert(error.response.data.errors.message);
      // toast.error(`${error.message}`);
    }
  }
);

export const addUser = createAsyncThunk(
  '/sky/users/create',
  async credentials => {
    try {
      await userPost(credentials);
      const { data } = await usersGet();
      // console.log(data.data.api_token);
      const getToken = data.data.api_token;
      token.set(getToken);
      return data.data;
    } catch (error) {
      if (error.response.status === 400) {
        alert('User creation error!');
      } else {
        alert('Something went wrong! Please reload the page!');
      }
      alert(error.response.data.errors.message);
      // toast.error(`${error.message}`);
    }
  }
);

export const getUserByNickName = createAsyncThunk(
  `/sky/users/show`,
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    const nickName = credentials.nickName;
    try {
      const { data } = await userGetByNick(nickName);
      return data.data;
    } catch (error) {
      alert(error.response.data.errors.message);
      // toast.error(`${error.message}`);
    }
  }
);
