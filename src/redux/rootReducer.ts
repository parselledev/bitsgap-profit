import { combineReducers } from 'redux';
import profitReducer from './profit/profit.reducer';

const rootReducer = combineReducers({
  profit: profitReducer
});

export default rootReducer;
