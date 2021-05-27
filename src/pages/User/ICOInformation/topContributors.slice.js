import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import _ from "lodash"

const PREFIX = `admin/ico_information/total_contributors`;

/**
 * Fetch data
 */
const fetchData = createAsyncThunk(`${PREFIX}/fetch_data`, async () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
})

const slice = createSlice({
  name: PREFIX,
  initialState: {
    cardsCount: 3,

    data: Array(8).fill({
      date: "14.2.2021 07:40 PM",
      user: "fernd...@gmail.com",
      tglab: "0.456733",
    })
      .map((data, id) => ({ [id]: { ...data, id } }))
      .reduce((p, n) => ({ ...p, ...n }), {}),
  },
  reducers: {
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
  },
});

const { reducer: adminTopContributorsReducer, actions } = slice;

export const topContributorsActions = {
  ...actions,
  fetchData,
}

export default adminTopContributorsReducer;