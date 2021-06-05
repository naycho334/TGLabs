import adminPlatformRewardsReceivedReducer from "pages/Admin/RewardsInformation/platformRewardsReceived.slice";
import adminDistributionHistoryReducer from "pages/Admin/RewardsInformation/distributionHistory.slice";
import adminLivePlatformPoolReducer from "pages/Admin/RewardsInformation/livePlatformPool.slice";
import adminAwaitingApprovalReducer from "pages/Admin/ICOInformation/awaitingApproval.slice";
import adminTopContributorsReducer from "pages/Admin/ICOInformation/topContributors.slice";
import adminOpenSupportTicketsReducer from "pages/Admin/Support/openSupportTickets.slice";
import adminAllSupportTicketsReducer from "pages/Admin/Support/allSupportTickets.slice";
import adminIcoPurchasesReducer from "pages/Admin/ICOInformation/icoPurchases.slice";
import adminRewardPoolReducer from "pages/Admin/RewardsInformation/rewardPool.slice";
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
    adminPlatformRewardsReceivedReducer,
    adminDistributionHistoryReducer,
    adminOpenSupportTicketsReducer,
    adminAllSupportTicketsReducer,
    adminAwaitingApprovalReducer,
    adminLivePlatformPoolReducer,
    adminTopContributorsReducer,
    adminIcoInformationReducer,
    adminIcoPurchasesReducer,
    adminTransactionsReducer,
    adminRewardPoolReducer,
    adminUsersReducer,

    // User
    userIcoInformationReducer,
  },
  devTools: process.env.NODE_ENV === "development"
})

export default store;