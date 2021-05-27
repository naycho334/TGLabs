import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import _ from "lodash"

const PREFIX = `admin/users`;

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
    search: '',
    isReadOnly: false,
    cardsCount: 3,
    data: Array(8).fill({
      regDate: "14.2.2021 07:40 PM",
      userId: "bc1qaw7e304esayf9pkj…",
      username: "ginek453",
      email: "username@gmail.com",
      country: "Austria",
      status: "approved",
      checked: false,
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
     * Change search text
     */
    changeSearch: (state, { payload }) => {
      state.search = payload;
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
      state.cardsCount = _.min([_.values(state.data).length, state.cardsCount + 3])
    },

    /**
     * Check row
     */
    checkRow: (state, { payload }) => {
      const { checked } = state.data[payload];
      state.data[payload].checked = !checked;
    },

    /**
     * Check all rows
     */
    checkAllRows: (state) => {
      const allChecked = _.values(state.data).every(item => item.checked);
      _.values(state.data).forEach(item => {
        state.data[item.id].checked = !allChecked
      })
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

const { reducer: adminUsersReducer, actions } = slice;

export const adminUsersActions = {
  ...actions,
  updateMonthlyReport,
  fetchData
}

export default adminUsersReducer;