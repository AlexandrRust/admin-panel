import { createSlice } from '@reduxjs/toolkit';
import { countryOperations } from './index';

const initialState = {
  countryList: [],
  title: null,
  btnTitle: null,
  fields: [],
  perPage: null,
  total: null,
  currentPage: null,
  filterInput: '',
  status: false,
  isCreate: false,
  isUpdate: false,
  isRefreshingUser: false,
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: {
    [countryOperations.getCountry.fulfilled](state, action) {
      state.countryList = action.payload.res.items.data;
      state.fields = action.payload.res.fields;
      state.title = action.payload.res.static.title;
      state.btnTitle = action.payload.res.static.btnAction;
      // state.roles = action.payload.res.roles;
      state.currentPage = action.payload.res.items.current_page;
      state.perPage = action.payload.res.items.per_page;
      state.total = action.payload.res.items.last_page;
      state.status = action.payload.status;
      state.isCreate = false;
      state.isUpdate = false;
    },
  },
});

export default countrySlice.reducer;
