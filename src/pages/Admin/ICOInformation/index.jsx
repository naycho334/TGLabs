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
      <CurrentICOStage />

      <Totals />

      <ICOPurchases />

      <TopContributors />

      <AwaitingApproval />
    </Page>
  );
};

export default memo(ICOInformation);
