import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import _ from "lodash"

const PREFIX = `admin/ico_information/awaiting_approval`;

/**
 * Fetch data
 */
const fetchData = createAsyncThunk(`${PREFIX}/fetch_data`, async () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
})

const slice = createSlice({
  name: PREFIX,
  initialState: {
    search: '',
    isReadOnly: false,
    cardsToShow: 3,

    data: Array(8).fill({
      date: "14.2.2021 07:40 PM",
      user: "fernd...@gmail.com",
      amount: "0,00034056",
      tglab: "0.456733",
      hash: "aa11c31e7a696eaeec254036826411499...",
      status: "complete",
      checked: false,
    })
      .map((data, id) => ({ [id]: { ...data, id } }))
      .reduce((p, n) => ({ ...p, ...n }), {})
  },
  reducers: {
    /**
     * Change search text
     */
    changeSearch: (state, { payload }) => {
      state.search = payload;
    },

    /**
     * Check a row
     */
    checkRow: (state, { payload }) => {
      const { checked } = state.data[payload];
      state.data[payload].checked = !checked
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

    /**
     * Load more data
     */
     loadMore: (state) => {
      state.cardsCount = _.min([_.values(state.data).length, state.cardsCount + 3])
    }
  },
  extraReducers: {
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
  },
});

const { reducer: adminAwaitingApprovalReducer, actions } = slice;

export const awaitingApprovalActions = {
  ...actions,
  fetchData
}

export default adminAwaitingApprovalReducer;