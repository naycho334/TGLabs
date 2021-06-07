import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

import image from "assets/pngs/logo_cloudbet.png";

const PREFIX = `admin/live_platform_pool`;

const deletePlatform = createAsyncThunk(`${PREFIX}/delete_platform`, (id) => {
  return Promise.resolve(id);
});

const uploadImage = createAsyncThunk(`${PREFIX}/upload_image`, (img) => {
  return Promise.resolve(img);
});

const SavePlatform = createAsyncThunk(`${PREFIX}/save_platform`, (props, redux) => {
  let data = _.get(redux.getState(), 'adminLivePlatformPoolReducer.platformDialog', {});
  const isNew = _.get(data, 'isNew', false);

  data = { ...data };

  if (isNew) {
    data.id = Date.now();
    delete data.isNew;
  }
  return Promise.resolve(data);
});

const slice = createSlice({
  name: PREFIX,

  initialState: {
    data: Array(4).fill({
      image: image,
      name: '',
      time: Date.now(),
      apiUrl: '',
      amount: {
        value: 1245.20,
        currency: 'usd',
      },
      prices: [
        { value: 999, unit: 'btc' },
        { value: 999, unit: 'btc' },
        { value: 999, unit: 'btc' },
        { value: 999, unit: 'btc' },
      ],
      open: false
    })
      .map((item, id) => ({ [id]: { ...item, id } }))
      .reduce((p, n) => ({ ...p, ...n }), {}),

    totalRewards: {
      currency: 'usd',
      value: 2837.73
    },

    nextPayout: Date.now(),

    platformDialog: null,
    cardsCount: 3

  },
  reducers: {
    toggleTableRow: (state, { payload }) => {
      const { open } = state.data[payload];
      state.data[payload].open = !open;
    },

    togglePlatformDialog: (state, { payload }) => {
      console.log(payload)
      if (_.isBoolean(payload) && payload)
        state.platformDialog = {
          isNew: true,
          image: null,
          apiUrl: '',
          name: '',
          time: Date.now(),
          amount: {
            value: 1245.20,
            currency: 'usd',
          },
          prices: [
            { value: 999, unit: 'btc' },
            { value: 999, unit: 'btc' },
            { value: 999, unit: 'btc' },
            { value: 999, unit: 'btc' },
          ],
          open: false
        }
      else if (_.isObject(payload)) state.platformDialog = payload;
      else if (_.isNull(payload)) state.platformDialog = null;
    },

    editPlatform: (state, { payload }) => {
      state.platformDialog = payload;
    },

    changeDialogValue: (state, { payload }) => {
      state.platformDialog = { ...state.platformDialog, ...payload }
    },
  },
  extraReducers: {
    // Upload image
    [uploadImage.pending]: (state, action) => {

    },
    [uploadImage.fulfilled]: (state, { payload }) => {
      state.platformDialog.image = payload;
    },
    [uploadImage.rejected]: (state, action) => {

    },

    // Save platform
    [SavePlatform.pending]: (state, action) => { },
    [SavePlatform.fulfilled]: (state, { payload }) => {
      state.data[payload.id] = payload;
      state.platformDialog = null;
    },
    [SavePlatform.rejected]: (state, { error }) => {
      console.log(error)
    },

    // Delete platform
    [deletePlatform.pending]: (state, action) => { },
    [deletePlatform.fulfilled]: (state, { payload }) => {
      delete state.data[payload]
      state.platformDialog = null;
    },
    [deletePlatform.rejected]: (state, { error }) => {
      console.log(error)
    },
  }
});

const { reducer: adminLivePlatformPoolReducer, actions } = slice;

export const adminLivePlatformPoolActions = {
  ...actions,
  deletePlatform,
  SavePlatform,
  uploadImage,
}

export default adminLivePlatformPoolReducer;