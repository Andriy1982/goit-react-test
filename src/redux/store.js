// import { createStore, combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';
import authReducer from './auth/auth-slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  // blacklist: ['filter'],
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todosReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     todos: todosReducer,
//   },
// });

// export default store;
