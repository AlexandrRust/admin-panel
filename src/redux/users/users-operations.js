import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersGet } from 'api/usersApi';
import { token } from 'api/api';

export const getUsers = createAsyncThunk('/sky/users', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const { data } = await usersGet();
    return data.data;
  } catch (error) {
    alert(error.response.data.errors.message);
    // toast.error(`${error.message}`);
  }
});
