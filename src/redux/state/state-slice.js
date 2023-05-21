import { createSlice } from '@reduxjs/toolkit';
import { stateOperations } from './index';

const initialState = {
  stateList: [],
  fields: [],
  static: {
    titlePage: '',
    btnTitle: '',
  },
  perPage: null,
  total: null,
  currentPage: null,
  isCreate: false,
  isUpdate: false,
};

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  extraReducers: {
    [stateOperations.getStates.fulfilled](state, action) {
      state.stateList = action.payload.res.items.data;
      state.static.titlePage = action.payload.res.static.title;
      state.static.btnTitle = action.payload.res.static.btnAction;
      state.fields = action.payload.res.fields;
      state.currentPage = action.payload.res.items.current_page;
      state.perPage = action.payload.res.items.per_page;
      state.total = action.payload.res.items.last_page;
      state.isCreate = false;
      state.isUpdate = false;
    },
    [stateOperations.addState.fulfilled](state, action) {
      state.stateList = action.payload.res.items.data;
      state.fields = action.payload.res.fields;
      state.title = action.payload.res.static.title;
      state.btnTitle = action.payload.res.static.btnAction;
      state.currentPage = action.payload.res.items.current_page;
      state.perPage = action.payload.res.items.per_page;
      state.total = action.payload.res.items.last_page;
      state.status = action.payload.status;
      state.isCreate = true;
    },
    [stateOperations.deleteState.fulfilled](state, action) {
      state.stateList = action.payload.res.items.data;
      state.currentPage = action.payload.res.items.current_page;
      state.perPage = action.payload.res.items.per_page;
      state.total = action.payload.res.items.last_page;
    },
  },
});

export default stateSlice.reducer;
