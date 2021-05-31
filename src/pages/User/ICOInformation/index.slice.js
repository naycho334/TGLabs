const { createSlice } = require("@reduxjs/toolkit");
const moment = require("moment");

const PREFIX = 'user/ico_information';

const slice = createSlice({
  name: PREFIX,
  initialState: {
    stages: {
      data: [
        {
          name: "Pre-ICO 1",
          price: 1.00,
          discount: 0,
          date_start: moment().subtract(90, 'days').valueOf(),
          date_end: moment().subtract(30, 'days').valueOf(),
          available_tokens: 200000
        },
        {
          name: "Pre-ICO 2",
          price: 1.40,
          discount: 5,
          date_start: moment().subtract(30, 'days').valueOf(),
          date_end: moment().add(30, 'days').valueOf(),
          available_tokens: 200000
        },
        {
          name: "ICO Stage 1",
          price: 1.80,
          discount: 0,
          date_start: moment().add(30, 'days').valueOf(),
          date_end: moment().add(90, 'days').valueOf(),
          available_tokens: 200000
        },
        {
          name: "ICO Stage 2",
          price: 2.50,
          discount: 10,
          date_start: moment().add(90, 'days').valueOf(),
          date_end: moment().add(150, 'days').valueOf(),
          available_tokens: 200000
        },
        {
          name: "ICO Stage 3",
          price: 3.45,
          discount: 0,
          date_start: moment().add(150, 'days').valueOf(),
          date_end: moment().add(210, 'days').valueOf(),
          available_tokens: 200000
        },
        {
          name: "ICO Stage 4",
          price: 5.00,
          discount: 0,
          date_start: moment().add(210, 'days').valueOf(),
          date_end: moment().add(270, 'days').valueOf(),
          available_tokens: 200000,
        },
      ]
        .map((stage, id) => ({ [id]: { ...stage, id } }))
        .reduce((p, n) => ({ ...p, ...n }), {}),
    },
    monthlyReport: false
  },
  reducers: {
    /**
     * Change monthly report value
     */
    updateMonthlyReport: (state, { payload }) => {
      state.monthlyReport = payload;
    }
  },
  extraReducers: {},
});

const { reducer: userIcoInformationReducer, actions } = slice;

export const userIcoInformationActions = {
  ...actions,
};

export default userIcoInformationReducer;