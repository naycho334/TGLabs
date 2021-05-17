import notificationsReducer from "components/DashboardPage/notifications.slide";
import adminIcoInformationReducer from "pages/Admin/ICOInformation/index.slice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    notificationsReducer,

    // Admin
    adminIcoInformationReducer,
  },
  devTools: process.env.NODE_ENV === "development"
})

export default store;