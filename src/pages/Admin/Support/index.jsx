import { useDispatch, useSelector } from "react-redux";
import { lazy, memo } from "react";

import ReportSwitch from "components/DashboardPage/ReportSwitch";
import { adminIcoInformationActions } from "./index.slice";
import OpenSupportTickets from "./OpenSupportTickets";
import { SupportIcon } from "components/Icons/Icons";
import AllSupportTickets from "./AllSupportTickets";
import SupportTicketDialog from "./components/SupportTicketDialog";

const Page = lazy(() => import("components/DashboardPage/Page"));

const ICOInformation = () => {
  const monthlyReport = useSelector(
    (state) => state.adminIcoInformationReducer.monthlyReport
  );
  const dispatch = useDispatch();

  /**
   * Update monthly report
   */
  const updateMonthlyReport = ({ target: { checked } }) =>
    dispatch(adminIcoInformationActions.updateMonthlyReport(checked));

  return (
    <Page
      title="Support"
      icon={SupportIcon}
      header={
        <ReportSwitch
          title="Email me a report every month"
          disabled={monthlyReport.loading}
          checked={monthlyReport.checked}
          onChange={updateMonthlyReport}
        />
      }
    >
      <OpenSupportTickets />
      <AllSupportTickets />
    </Page>
  );
};

export default memo(ICOInformation);
