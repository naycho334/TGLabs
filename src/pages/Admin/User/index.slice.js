import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import _ from "lodash"

const PREFIX = `admin/user`;

/**
 * Fetch pending withdrawals data
 */
const fetchData = createAsyncThunk(`${PREFIX}/fetch_data`, async () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
});

/**
 * Fetch all withdrawals data
 */
const updateMonthlyReport = createAsyncThunk(`${PREFIX}/update_monthly_report`, async () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
});

const slice = createSlice({
  name: PREFIX,
  initialState: {
    isReadOnly: false,
    cardsCount: 3,
    data: Array(8).fill({
      date: "14.2.2021 07:40 PM",
      user: "username@gmail.com",
      tglab: 0.00040970,
      amount: {
        value: 0.00040970,
        currency: 'btc',
        usd: 453.87
      },
    })
      .map((item, index) => ({ ...item, status: index % 3 === 0 ? 'approved' : index % 3 === 1 ? 'unconfirmed' : 'blocked' }))
      .map((data, id) => ({ [id]: { ...data, id } }))
      .reduce((p, n) => ({ ...p, ...n }), {}),

    monthlyReport: {
      checked: false,
      loading: false,
    }
  },
  reducers: {
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
      state.cardsCount = _.min([_.values(state.data).length, state.cardsCount + 3])
    },
  },
  extraReducers: {
    /**
     * Fetch pending withrawals data
     */
    [fetchData.pending]: (state) => {
      console.log("FETCH DATA")
      state.isReadOnly = true;
    },
    [fetchData.fulfilled]: (state) => {
      state.isReadOnly = false;
    },
    [fetchData.rejected]: (state) => {
      state.isReadOnly = false;
    },

    /**
     * Fetch pending withrawals data
     */
    [updateMonthlyReport.pending]: (state) => {
      state.monthlyReport.loading = true;
    },
    [updateMonthlyReport.fulfilled]: (state) => {
      state.monthlyReport.checked = !state.monthlyReport.checked;
      state.monthlyReport.loading = false;
    },
    [updateMonthlyReport.rejected]: (state) => {
      state.monthlyReport.loading = false;
    },
  }
})

const { reducer: adminUserReducer, actions } = slice;

export const adminUserActions = {
  ...actions,
  updateMonthlyReport,
  fetchData
}

export default adminUserReducer;