// import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
const loggerMiddleware = createLogger();
const middlewares = [loggerMiddleware];

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares
});

const persistor = persistStore(store);

export { store, persistor };
