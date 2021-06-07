import { useDispatch, useSelector } from "react-redux";
import { lazy, memo } from "react";

import ReportSwitch from "components/DashboardPage/ReportSwitch";
import { TransactionsIcon } from "components/Icons/Icons";
import TitleComponent from "./components/TitleComponent";
import ReferralEarnings from "./ReferralEarnings";
import { adminUserActions } from "./index.slice";
import RewardBalances from "./RewardBalances";
import Referrals from "./Referrals";
import Balances from "./Balances";
import Wallets from "./Wallets";
import InfoBar from "./InfoBar";

const Page = lazy(() => import("components/DashboardPage/Page"));

const User = () => {
  const { monthlyReport } = useSelector((state) => state.adminUsersReducer);
  const dispatch = useDispatch();
  const title = "User Detail";

  const updateMonthlyReport = () =>
    dispatch(adminUserActions.updateMonthlyReport());

  return (
    <Page
      title={title}
      titleComponent={<TitleComponent title={title} user="ginek423" />}
      header={
        <ReportSwitch
          title="Email me a report every month"
          disabled={monthlyReport.loading}
          checked={monthlyReport.checked}
          onChange={updateMonthlyReport}
        />
      }
    >
      <InfoBar />
      <Balances />
      <RewardBalances />
      <Wallets />
      <Referrals />
      <ReferralEarnings />
    </Page>
  );
};

export default memo(User);
