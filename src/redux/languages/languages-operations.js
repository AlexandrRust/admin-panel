import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'api/api';
import { languagesGet } from 'api/languagesApi';

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
