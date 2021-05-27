import { useDispatch, useSelector } from "react-redux";
import { lazy, memo } from "react";

import ReportSwitch from "components/DashboardPage/ReportSwitch";
import { TransactionsIcon } from "components/Icons/Icons";
import { adminUsersActions } from "./index.slice";
import AllUsers from "./AllUsers";

const Page = lazy(() => import("components/DashboardPage/Page"));

const Users = () => {
  const { monthlyReport } = useSelector((state) => state.adminUsersReducer);
  const dispatch = useDispatch();

  const updateMonthlyReport = () =>
    dispatch(adminUsersActions.updateMonthlyReport());

  return (
    <Page
      title="Users"
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
      <AllUsers />
    </Page>
  );
};

export default memo(Users);
