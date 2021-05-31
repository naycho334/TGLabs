import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import _ from "lodash"

const PREFIX = `admin/support/open_support_tickets`;

/**
 * Fetch data
 */
const fetchData = createAsyncThunk(`${PREFIX}/fetch_data`, async () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
});

/**
 * Save update
 */
const updateTicket = createAsyncThunk(`${PREFIX}/update_ticket`, async () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
});

const slice = createSlice({
  name: PREFIX,
  initialState: {
    period: 0,
    search: '',
    isReadOnly: false,
    cardsCount: 3,
    ticketToEdit: null,

    data: Array(8).fill({
      date: "14.2.2021 07:40 PM",
      username: "fernd...@gmail.com",
      ticketId: "28282828",
      subject: "What is TGLABS token?",
      description: "Lorem ipsum dolor sit amet, consetetur …",
      message: "",
      notes: "",
      status: "complete",
    })
      .map((item, index) => ({ ...item, status: index % 3 === 0 ? 'complete' : index % 3 === 1 ? 'unconfirmed' : 'pending' }))
      .map((data, id) => ({ [id]: { ...data, id } }))
      .reduce((p, n) => ({ ...p, ...n }), {}),
  },
  reducers: {
    /**
     * Load more data
     */
    loadMore: (state) => {
      state.cardsCount = _.min([_.values(state.data).length, state.cardsCount + 3])
    },

    /**
     * Edit ticket
     */
    editTicket: (state, { payload }) => {
      state.ticketToEdit = _.isNull(payload) ? null : state.data[payload];
    },

    /**
     * Change value
     */
    changeDailogValue: (state, { payload }) => {
      state.ticketToEdit = { ...state.ticketToEdit, ...payload };
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
     * Update ticket
     */
    [updateTicket.pending]: (state) => {
      state.isReadOnly = true;
    },
    [updateTicket.fulfilled]: (state) => {
      const { id } = state.ticketToEdit;
      state.data[id] = state.ticketToEdit;
      state.ticketToEdit = null;
      state.isReadOnly = false;
    },
    [updateTicket.rejected]: (state) => {
      state.isReadOnly = false;
    },
  },
});

const { reducer: adminOpenSupportTicketsReducer, actions } = slice;

export const adminOpenSupportTicketsActions = {
  ...actions,
  updateTicket,
  fetchData,
}

export default adminOpenSupportTicketsReducer;