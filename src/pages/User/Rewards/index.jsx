import { lazy, memo } from "react";

import DistributionHistory from "./DistributionHistory";
import RewardBalances from "./RewardBalances";
import TotalEarnings from "./TotalEarnings";
import useStyles from "./styles";

const Page = lazy(() => import("components/DashboardPage/Page"));

const Rewards = () => {
  const classes = useStyles();

  return (
    <Page title="Rewards">
      <TotalEarnings />
      <RewardBalances />
      <DistributionHistory />
    </Page>
  );
};

export default memo(Rewards);
