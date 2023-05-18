import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'api/api';
import {
  languagesCteate,
  languagesDelete,
  languagesGet,
} from 'api/languagesApi';

export const getLanguages = createAsyncThunk(
  '/sky/locations/languages',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await languagesGet(credentials);
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

export const addLanguages = createAsyncThunk(
  '/sky/languages/create',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      await languagesCteate(credentials);
      const { data } = await languagesGet();
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
export const deleteLanguages = createAsyncThunk(
  `/sky/languages/delete`,
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    const persistedCurentPage = state.languages.currentPage;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      await languagesDelete(credentials);
      const { data } = await languagesGet(persistedCurentPage);
      // console.log(data.data.items.data.length);
      // const res = data.data;
      // const getToken = data.data.api_token;
      // token.set(getToken);
      // const status = data.status;
      // return { res, status };
      if (data.data.items.data.length >= 1) {
        const res = data.data;
        const getToken = data.data.api_token;
        token.set(getToken);
        const status = data.status;
        return { res, status };
      }
      if (data.data.items.data.length < 1) {
        const { data } = await languagesGet(1);
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
