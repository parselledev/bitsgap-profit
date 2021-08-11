import { store } from './store';

export type AppState = {
  profit: any;
};

export type AppDispatch = typeof store.dispatch;
