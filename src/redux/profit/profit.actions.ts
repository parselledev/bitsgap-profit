import * as at from './profit.actionTypes';
import * as types from './profit.types';

export const profitAddItem = (
  profitItem: types.ProfitItemType
): types.ProfitAddItem => ({
  type: at.PROFIT_ADD_ITEM,
  payload: profitItem
});

export const profitRemoveItem = (id: number): types.ProfitRemoveItem => ({
  type: at.PROFIT_REMOVE_ITEM,
  payload: id
});

export const profitSaveData = (): types.ProfitSaveData => ({
  type: at.PROFIT_SAVE_DATA
});

export const profitClearData = (): types.ProfitClearData => ({
  type: at.PROFIT_CLEAR_DATA
});
