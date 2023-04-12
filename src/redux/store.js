import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { serializableCheck } from '../constants/constants';
import authSlice from './auth/auth-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: [],
};

export const persistAuth = persistReducer(authPersistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistAuth,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck,
      devTools: process.env.NODE_ENV === 'development',
    });
  },
});

export const persistor = persistStore(store);
