import notificationsReducer from "components/DashboardPage/notifications.slide";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    notificationsReducer
  },
  devTools: process.env.NODE_ENV === "development"
})

export default store;