import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { lazy, memo } from "react";

import ReportSwitch from "components/DashboardPage/ReportSwitch";
import { ICOInformationIcon } from "components/Icons/Icons";
import { adminIcoInformationActions } from "./index.slice";
import AwaitingApproval from "./AwaitingApproval";
import CurrentICOStage from "./CurrentICOStage";
import TopContributors from "./TopContributors";
import ICOPurchases from "./ICOPurchases";
import Totals from "./Totals";
import Stages from "./Stages";

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
      title="ICO Information"
      icon={ICOInformationIcon}
      header={
        <ReportSwitch
          title="Email me a report every month"
          disabled={monthlyReport.loading}
          checked={monthlyReport.checked}
          onChange={updateMonthlyReport}
        />
      }
    >
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg>
            <CurrentICOStage />
          </Grid>
          <Grid item xs={12} lg="auto">
            <Totals />
          </Grid>
        </Grid>
      </Grid>

      <Stages />

      <ICOPurchases />

      <TopContributors />

      <AwaitingApproval />
    </Page>
  );
};

export default memo(ICOInformation);
