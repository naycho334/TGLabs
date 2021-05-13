import { Grid } from "@material-ui/core";
import { lazy, memo } from "react";

import AwaitingApproval from "./AwaitingApproval";
import CurrentICOStage from "./CurrentICOStage";
import TopContributors from "./TopContributors";
import ICOPurchases from "./ICOPurchases";
import Totals from "./Totals";

const Page = lazy(() => import("components/DashboardPage/Page"));

const ICOInformation = () => {
  return (
    <Page title="ICO Information">
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

      <ICOPurchases />

      <TopContributors />

      <AwaitingApproval />
    </Page>
  );
};

export default memo(ICOInformation);
