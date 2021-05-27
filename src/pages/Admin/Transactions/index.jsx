import { useDispatch, useSelector } from "react-redux";
import { lazy, memo } from "react";

import PendingWithdrawals from "./PendingWithdrawals";
import AllWithdrawals from "./AllWithdrawals";

import ReportSwitch from "components/DashboardPage/ReportSwitch";
import { TransactionsIcon } from "components/Icons/Icons";
import { adminTransactionsActions } from "./index.slice";

const Page = lazy(() => import("components/DashboardPage/Page"));

const Transactions = () => {
  const { monthlyReport } = useSelector(
    (state) => state.adminTransactionsReducer
  );
  const dispatch = useDispatch();

  const updateMonthlyReport = () =>
    dispatch(adminTransactionsActions.updateMonthlyReport());

  return (
    <Page
      title="Transactions"
      header={
        <ReportSwitch
          title="Email me a report every month"
          disabled={monthlyReport.loading}
          checked={monthlyReport.checked}
          onChange={updateMonthlyReport}
        />
      }
      icon={TransactionsIcon}
    >
      <PendingWithdrawals />
      <AllWithdrawals />
    </Page>
  );
};

export default memo(Transactions);
