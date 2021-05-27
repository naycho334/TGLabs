import adminAwaitingApprovalReducer from "pages/Admin/ICOInformation/awaitingApproval.slice";
import adminTopContributorsReducer from "pages/Admin/ICOInformation/topContributors.slice";
import adminIcoPurchasesReducer from "pages/Admin/ICOInformation/icoPurchases.slice";
import notificationsReducer from "components/DashboardPage/notifications.slide";
import adminIcoInformationReducer from "pages/Admin/ICOInformation/index.slice";
import userIcoInformationReducer from "pages/User/ICOInformation/index.slice";
import adminTransactionsReducer from "pages/Admin/Transactions/index.slice";
import adminUsersReducer from "pages/Admin/Users/index.slice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    notificationsReducer,

    // Admin
    adminAwaitingApprovalReducer,
    adminTopContributorsReducer,
    adminIcoInformationReducer,
    adminIcoPurchasesReducer,
    adminTransactionsReducer,
    adminUsersReducer,

    // User
    userIcoInformationReducer,
  },
  devTools: process.env.NODE_ENV === "development"
})

export default store;