import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'api/api';
import {
  deleteMenus,
  menusCteate,
  menusFormGet,
  menusGet,
  menusUpdate,
} from 'api/menusApi';

export const getMenusFrom = createAsyncThunk(
  '/sky/menus/form',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await menusFormGet(credentials);
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

export const getMenus = createAsyncThunk(
  '/sky/menus',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await menusGet(credentials);
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

export const addMenus = createAsyncThunk(
  '/sky/menus/create',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      await menusCteate(credentials);
      const { data } = await menusGet();
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

export const menusDelete = createAsyncThunk(
  `/sky/menus/delete`,
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    const persistedCurentPage = state.menus.currentPage;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      await deleteMenus(credentials);

      const { data } = await menusGet(persistedCurentPage);
      if (data.data.items.data.length >= 1) {
        const res = data.data;
        const getToken = data.data.api_token;
        token.set(getToken);
        const status = data.status;
        return { res, status };
      }
      if (data.data.items.data.length < 1) {
        const { data } = await menusGet(1);
        const res = data.data;
        const getToken = data.data.api_token;
        token.set(getToken);
        const status = data.status;
        return { res, status };
      }
    } catch (error) {
      const err = thunkAPI.rejectWithValue(error.response.data);
      return err;
      // alert(error.response.data.errors.message);
      // toast.error(`${error.message}`);
    }
  }
);
export const updateMenus = createAsyncThunk(
  `/sky/menus/update`,
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      await menusUpdate(credentials);
      // const { data } = await rolesGet();
      // const status = data.status;
      // const res = data.data;
      // return { res, status };
    } catch (error) {
      const err = thunkAPI.rejectWithValue(error.response.data);
      return err;
      // alert(error.response.data.errors.message);
      // toast.error(`${error.message}`);
    }
  }
);
