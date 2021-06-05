import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

import image from "assets/pngs/logo_cloudbet.png";

const PREFIX = `admin/platform_rewards_received`;

const fetchData = createAsyncThunk(`${PREFIX}/fetch_data`, () => {
  return Promise.resolve();
});

const slice = createSlice({
  name: PREFIX,

  initialState: {
    data: Array(4).fill({
      image: image,
      name: '',
      time: Date.now(),
      status: 'pending',
      amount: {
        value: 1245.20,
        currency: 'usd',
      },
      prices: [
        { value: 999, unit: 'btc' },
        { value: 999, unit: 'btc' },
        { value: 999, unit: 'btc' },
        { value: 999, unit: 'btc' },
        { value: 999, unit: 'btc' },
      ],
      open: false
    })
      .map((item, id) => ({ [id]: { ...item, id } }))
      .reduce((p, n) => ({ ...p, ...n }), {}),

  },
  reducers: {
    toggleTableRow: (state, { payload }) => {
      const { open } = state.data[payload];
      state.data[payload].open = !open;
    },

  },
  extraReducers: {
    // Upload image
    [fetchData.pending]: (state, action) => {

    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.platformDialog.image = payload;
    },
    [fetchData.rejected]: (state, action) => {

    },
  }
});

const { reducer: adminPlatformRewardsReceivedReducer, actions } = slice;

export const adminPlatformRewardsReceivedActions = {
  ...actions,
  fetchData,
}

export default adminPlatformRewardsReceivedReducer;