const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const moment = require("moment");

const PREFIX = 'admin/ico_information';

/**
 * Save stage value
 */
const saveStageChanges = createAsyncThunk(`${PREFIX}/update_stage_value`, async (data) => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
});

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
      stageToEdit: null,
      readOnly: false,
    }
  },
  reducers: {
    /**
     * Set stage to edit
     */
    setStageToEdit: (state, { payload }) => {
      state.stages.stageToEdit = payload;
    },

    /**
     * Edit stage value
     */
    editStageData: (state, { payload }) => {
      state.stages.stageToEdit = { ...state.stages.stageToEdit, ...payload }
    },
  },
  extraReducers: {
    /**
     * Save stage changes
     */
    [saveStageChanges.pending]: (state, action) => {
      state.stages.readOnly = true
    },
    [saveStageChanges.fulfilled]: (state, action) => {
      state.stages.readOnly = false;
      const data = state.stages.stageToEdit;
      state.stages.data[data.id] = data;
      state.stages.stageToEdit = null;
    },
    [saveStageChanges.rejected]: (state, action) => {
      state.stages.readOnly = false
    },
  },
});

const { reducer: adminIcoInformationReducer, actions } = slice;

export const adminIcoInformationActions = {
  ...actions,
  saveStageChanges
};

export default adminIcoInformationReducer;