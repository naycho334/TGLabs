import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import _ from "lodash"

const PREFIX = `admin/ico_information/ico_purchases`;

/**
 * Fetch data
 */
const fetchData = createAsyncThunk(`${PREFIX}/fetch_data`, async () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
})

/**
 * Save data
 */
const save = createAsyncThunk(`${PREFIX}/save_data`, async () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
})

const slice = createSlice({
  name: PREFIX,
  initialState: {
    period: 0,
    search: '',
    isReadOnly: false,
    cardsCount: 3,

    data: Array(8).fill({
      date: "14.2.2021 07:40 PM",
      user: "fernd...@gmail.com",
      amount: "0,00034056",
      tglab: "0.456733",
      hash: "aa11c31e7a696eaeec254036826411499...",
      status: "complete",
    })
      .map((data, id) => ({ [id]: { ...data, id } }))
      .reduce((p, n) => ({ ...p, ...n }), {}),

    newPurchase: {
      isReadOnly: false,
      open: false,
      hash: '',
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
     * Toggle dialog
     */
    toggleDialog: (state, { payload }) => {
      if (payload) state.newPurchase.hash = ''
      state.newPurchase.open = payload;
    },

    /**
     * Change hash
     */
    changeHash: (state, { payload }) => {
      state.newPurchase.hash = payload;
    },

    /**
     * Load more data
     */
    loadMore: (state) => {
      state.cardsCount = _.min([_.values(state.data).length, state.cardsCount + 3])
    }
  },
  extraReducers: {
    /**
     * Fetch data
     */
    [fetchData.pending]: (state) => {
      state.isReadOnly = true;
    },
    [fetchData.fulfilled]: (state) => {
      state.isReadOnly = false;
    },
    [fetchData.rejected]: (state) => {
      state.isReadOnly = false;
    },

    /**
     * Save data
     */
    [save.pending]: (state) => {
      state.newPurchase.isReadOnly = true;
    },
    [save.fulfilled]: (state) => {
      state.newPurchase.isReadOnly = false;
      state.newPurchase.open = false;
    },
    [save.rejected]: (state) => {
      state.newPurchase.isReadOnly = false;
    },
  },
});

const { reducer: adminIcoPurchasesReducer, actions } = slice;

export const adminIcoPurchasesActions = {
  ...actions,
  fetchData,
  save,
}

export default adminIcoPurchasesReducer;