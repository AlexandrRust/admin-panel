import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  usersGet,
  userPost,
  userGetByNick,
  getUserForm,
  deleteUser,
  updateUser,
  userGetShow,
} from 'api/usersApi';
import { token } from 'api/api';

// import { toast } from 'react-toastify';

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
      const status = data.status;
      const res = data.data;
      return { res, status };
    } catch (error) {
      // console.log(error.response);
      const err = thunkAPI.rejectWithValue(error.response.data);
      return err;
      // console.log(error);
      // alert(error.response.data.errors.message);
      // toast.error(`${error.message}`);
    }
  }
);

export const addUser = createAsyncThunk(
  '/sky/users/create',
  async (credentials, thunkAPI) => {
    try {
      await userPost(credentials);
      const { data } = await usersGet();
      // console.log(data.data.api_token);
      const getToken = data.data.api_token;
      token.set(getToken);
      const status = data.status;
      const res = data.data;
      return { res, status };
    } catch (error) {
      const err = thunkAPI.rejectWithValue(error.response.data);
      // toast.error(`${err.payload.errors}`);
      console.log(err.payload.errors[0]);
      return err;
      //   if (error.response.status === 400) {
      //     alert('User creation error!');
      //   } else {
      //     alert('Something went wrong! Please reload the page!');
      //   }
      //   alert(error.response.data.errors.message);
    }
  }
);

export const getUserByNickName = createAsyncThunk(
  `/sky/users`,
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    // const nickName = credentials.nickName;

    try {
      // if (!nickName) {
      //   const { data } = await usersGet();
      //   return data.data;
      // }
      const { data } = await userGetByNick(credentials);
      const status = data.status;
      const res = data.data;
      return { res, status };
    } catch (error) {
      const err = thunkAPI.rejectWithValue(error.response.data);
      return err;
      // alert(error.response.data.errors.message);
      // toast.error(`${error.message}`);
    }
  }
);
export const getUserShow = createAsyncThunk(
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
      const { data } = await userGetShow({ nickName });
      const status = data.status;
      const res = data.data;
      return { res, status };
    } catch (error) {
      const err = thunkAPI.rejectWithValue(error.response.data);
      return err;
      // alert(error.response.data.errors.message);
      // toast.error(`${error.message}`);
    }
  }
);

export const UserFormGet = createAsyncThunk(
  `/sky/users/form`,
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    // const nickName = credentials.nickName;
    try {
      // if (!nickName) {
      //   const { data } = await usersGet();
      //   return data.data;
      // }
      console.log(credentials);
      const { data } = await getUserForm(credentials);
      const status = data.status;
      const res = data.data;
      return { res, status };
    } catch (error) {
      const err = thunkAPI.rejectWithValue(error.response.data);
      return err;
      // alert(error.response.data.errors.message);
      // toast.error(`${error.message}`);
    }
  }
);
export const userUpdate = createAsyncThunk(
  `/sky/users/update`,
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    // const nickName = credentials.nickName;
    try {
      // if (!nickName) {
      //   const { data } = await usersGet();
      //   return data.data;
      // }
      const { firstname, lastname, email, phone, password, nickName } =
        credentials;
      await updateUser({
        firstname,
        lastname,
        email,
        phone,
        password,
        nickName,
      });

      const { data } = await usersGet();
      const getToken = data.data.api_token;
      token.set(getToken);
      const status = data.status;
      const res = data.data;
      return { res, status };
    } catch (error) {
      const err = thunkAPI.rejectWithValue(error.response.data);
      console.log(err);
      return err;

      // alert(error.response.data.errors.message);
      // toast.error(`${error.message}`);
    }
  }
);
export const UserDelete = createAsyncThunk(
  `/sky/users/delete`,
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    // const nickName = credentials.nickName;
    try {
      // if (!nickName) {
      //   const { data } = await usersGet();
      //   return data.data;
      // }
      await deleteUser(credentials);

      const { data } = await usersGet();
      console.log(data.data);
      const getToken = data.data.api_token;
      token.set(getToken);
      const status = data.status;
      const res = data.data;
      return { res, status };
    } catch (error) {
      const err = thunkAPI.rejectWithValue(error.response.data);
      return err;
      // alert(error.response.data.errors.message);
      // toast.error(`${error.message}`);
    }
  }
);
