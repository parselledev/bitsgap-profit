import * as at from './profit.actionTypes';
import { ProfitActions } from './profit.types';
import { IProfitState } from './profit.types';

const INITIAL_STATE: IProfitState = {
  data: [],
  err: null
};

const profitReducer = (state = INITIAL_STATE, action: ProfitActions) => {
  switch (action.type) {
    case at.PROFIT_ADD_ITEM:
      return {
        ...state,
        data: [...state.data, action.payload]
      };

    case at.PROFIT_REMOVE_ITEM:
      return {
        ...state,
        data: state.data.filter((item, index) => action.payload !== index)
      };

    case at.PROFIT_SAVE_DATA:
      return {
        ...state,
        data: state.data
      };

    case at.PROFIT_CLEAR_DATA:
      return {
        ...state,
        data: []
      };

    default:
      return state;
  }
};

export default profitReducer;
