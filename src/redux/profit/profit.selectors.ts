import { createSelector } from 'reselect';
import { AppState } from 'redux/types';

const selectProfit = (state: AppState) => state.profit;

export const selectProfitData = createSelector(
  [selectProfit],
  (profit) => profit.data
);
