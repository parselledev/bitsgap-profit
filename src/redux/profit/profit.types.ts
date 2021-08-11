import * as at from './profit.actionTypes';

export interface IProfitState {
  data: ProfitItemType[];
  err: null | Error;
}

export type ProfitItemType = {
  price: number;
  percent: number;
  id?: number;
};

export type ProfitAddItem = {
  type: typeof at.PROFIT_ADD_ITEM;
  payload: ProfitItemType;
};

export type ProfitRemoveItem = {
  type: typeof at.PROFIT_REMOVE_ITEM;
  payload: number;
};

export type ProfitSaveData = {
  type: typeof at.PROFIT_SAVE_DATA;
};

export type ProfitClearData = {
  type: typeof at.PROFIT_CLEAR_DATA;
};

export type ProfitActions =
  | ProfitAddItem
  | ProfitRemoveItem
  | ProfitSaveData
  | ProfitClearData;
