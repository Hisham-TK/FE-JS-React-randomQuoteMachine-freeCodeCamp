import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { quoteApi } from '../quote/quoteApi';

const rootReducer = combineReducers({
  [quoteApi.reducerPath]: quoteApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quoteApi.middleware),

  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
