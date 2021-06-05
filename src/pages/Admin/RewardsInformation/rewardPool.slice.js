const { createSlice } = require("@reduxjs/toolkit");

const PREFIX = `admin/reward_pool`;

const slice = createSlice({
  name: PREFIX,

  initialState: {
    data: Array(8).fill({
      available: {
        value: 0.00040970,
        currency: 'btc',
        usd: 453.87
      },
      estimateAmount: {
        value: 0.00040970,
        currency: 'btc',
        usd: 453.87
      },
    })
      .map((item, id) => ({ [id]: { ...item, id } }))
      .reduce((p, n) => ({ ...p, ...n }), {}),

    totalRewards: {
      currency: 'usd',
      value: 2837.73
    },

    nextPayout: '00:00:00',
    cardsCount: 3

  },
  reducers: {

  },
  extraReducers: {

  }
});

const { reducer: adminRewardPoolReducer, actions } = slice;

export const adminRewardPoolActions = {
  ...actions
}

export default adminRewardPoolReducer;