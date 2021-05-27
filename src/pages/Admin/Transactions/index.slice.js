import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import _ from "lodash"

const PREFIX = `admin/transactions`;

/**
 * Fetch pending withdrawals data
 */
const fetchPendingWithdrawalsData = createAsyncThunk(`${PREFIX}/fetch_pending_withdrawals_data`, async () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
})

/**
 * Fetch all withdrawals data
 */
const fetchAllWithdrawalsData = createAsyncThunk(`${PREFIX}/fetch_all_withdrawals_data`, async () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
})

/**
 * Fetch all withdrawals data
 */
const updateMonthlyReport = createAsyncThunk(`${PREFIX}/update_monthly_report`, async () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
})

const slice = createSlice({
  name: PREFIX,
  initialState: {

    pendingWithdrawals: {
      period: 0,
      search: '',
      isReadOnly: false,
      cardsCount: 3,
      data: Array(8).fill({
        date: "14.2.2021 07:40 PM",
        user: "fernd...@gmail.com",
        amount: "0,00034056",
        address: "aa11c31e7a696eaeec254036826411499....",
        hash: "aa11c31e7a696eaeec254036826411499...",
        status: "complete",
        checked: false,
      })
        .map((data, id) => ({ [id]: { ...data, id } }))
        .reduce((p, n) => ({ ...p, ...n }), {}),
    },

    allWithdrawals: {
      cardsCount: 3,
      data: Array(8).fill({
        date: "14.2.2021 07:40 PM",
        user: "fernd...@gmail.com",
        amount: "0,00034056",
        address: "aa11c31e7a696eaeec254036826411499....",
        hash: "aa11c31e7a696eaeec254036826411499...",
        status: "complete",
        checked: false,
      })
        .map((data, id) => ({ [id]: { ...data, id } }))
        .reduce((p, n) => ({ ...p, ...n }), {}),
    },

    monthlyReport: {
      checked: false,
      loading: false,
    }
  },
  reducers: {
    /**
     * Change search text
     */
    changeSearch: (state, { payload }) => {
      state.pendingWithdrawals.search = payload;
    },

    /**
     * Change period
     */
    changePeriod: (state, { payload }) => {
      state.period = payload;
    },

    /**
     * Load more data
     */
    loadMore: (state, { payload }) => {
      const rowsCount = _.values(_.get(state, [payload, 'data'], {})).length;
      const cardsCount = _.get(state, [payload, 'cardsCount']);

      state[payload].cardsCount = _.min([rowsCount, cardsCount + 3])
    },

    /**
     * Check row
     */
    checkRow: (state, { payload }) => {
      const { checked } = state.pendingWithdrawals.data[payload];
      state.pendingWithdrawals.data[payload].checked = !checked;
    },

    /**
     * Check all rows
     */
    checkAllRows: (state) => {
      const allChecked = _.values(state.pendingWithdrawals.data).every(item => item.checked);
      _.values(state.pendingWithdrawals.data).forEach(item => {
        state.pendingWithdrawals.data[item.id].checked = !allChecked
      })
    },
  },
  extraReducers: {
    /**
     * Fetch pending withrawals data
     */
    [fetchPendingWithdrawalsData.pending]: (state) => {
      console.log("FETCH DATA")
      state.pendingWithdrawals.isReadOnly = true;
    },
    [fetchPendingWithdrawalsData.fulfilled]: (state) => {
      state.pendingWithdrawals.isReadOnly = false;
    },
    [fetchPendingWithdrawalsData.rejected]: (state) => {
      state.pendingWithdrawals.isReadOnly = false;
    },

    /**
     * Fetch all withdrawals data
     */
    [fetchAllWithdrawalsData.pending]: (state) => {
      console.log("FETCH DATA")
      state.isReadOnly = true;
    },
    [fetchAllWithdrawalsData.fulfilled]: (state) => {
      state.isReadOnly = false;
    },
    [fetchAllWithdrawalsData.rejected]: (state) => {
      state.isReadOnly = false;
    },

    /**
     * Update monthly report
     */
    [updateMonthlyReport.pending]: (state) => {
      state.monthlyReport.loading = true;
    },
    [updateMonthlyReport.fulfilled]: (state) => {
      state.monthlyReport.loading = false
      state.monthlyReport.checked = !state.monthlyReport.checked;
    },
    [updateMonthlyReport.rejected]: (state) => {
      state.monthlyReport.loading = false
    },
  },
});

const { reducer: adminTransactionsReducer, actions } = slice;

export const adminTransactionsActions = {
  ...actions,
  fetchPendingWithdrawalsData,
  fetchAllWithdrawalsData,
  updateMonthlyReport,
}

export default adminTransactionsReducer;