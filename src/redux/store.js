import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { serializableCheck } from '../constants/constants';
import authSlice from './auth/auth-slice';
import rolesSlice from './roles/roles-slice';
import usersSlice from './users/users-slice';
import menusSlice from './menus/menus-slice';
import languagesSlice from './languages/languages-slice';
import stateSlice from './state/state-slice';
import countrySlice from './country/country-slice';
import citySlice from './city/city-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: [],
};

export const persistAuth = persistReducer(authPersistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistAuth,
    users: usersSlice,
    roles: rolesSlice,
    menus: menusSlice,
    languages: languagesSlice,
    state: stateSlice,
    country: countrySlice,
    city: citySlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck,
      devTools: process.env.NODE_ENV === 'development',
    });
  },
});

export const persistor = persistStore(store);
