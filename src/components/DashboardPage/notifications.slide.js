const { createSlice } = require("@reduxjs/toolkit");

const PREFIX = 'notifications';

const notificationType = (key) => {
  switch (key) {
    case 0:
      return "warning";
    case 1:
      return "info";
    case 2:
      return "danger";
    default:
      return "default";
  }
};

const slice = createSlice({
  name: PREFIX,
  initialState: {
    notifications: {
      ...Array(5).fill(1).map((e, id) => ({
        [id]: {
          title: `Lorem ipsum dolor ${id + 1}`,
          content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
          type: notificationType(id),
          id,
        }
      }))
        .reduce((p, n) => ({ ...p, ...n }), {})
    }
  },
  reducers: {
    /**
     * Delete notification
     */
    deleteNotification: (state, { payload }) => {
      delete state.notifications[payload];
    },

    /**
     * Clear all notifications
     */
    clearAll: (state, { payload }) => {
      state.notifications = {}
    },
  },
  extraReducers: {

  },
});

const { reducer: notificationsReducer, actions } = slice;

export const notificationsActions = {
  ...actions
};

export default notificationsReducer;