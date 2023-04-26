import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'api/api';
import { deleteRole, rolesCteate, rolesGet } from 'api/rolesApi';

export const getRoles = createAsyncThunk(
  '/sky/roles',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await rolesGet(credentials);
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

export const addRoles = createAsyncThunk(
  '/sky/roles/create',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      await rolesCteate(credentials);
      const { data } = await rolesGet();
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

export const RoleDelete = createAsyncThunk(
  `/sky/roles/delete`,
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
      await deleteRole(credentials);

      const { data } = await rolesGet();
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
