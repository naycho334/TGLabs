import { lazy, memo } from "react";
import _ from "lodash";

import { RewardsInformationIcon } from "components/Icons/Icons";
import PlatformRewardsReceived from "./PlatformRewardsReceived";
import PlatformDialog from "./components/PlatformDialog";
import DistributionHistory from "./DistributionHistory";
import LivePlatformPools from "./LivePlatformPools";
import RewardPool from "./RewardPool";

const Page = lazy(() => import("components/DashboardPage/Page"));

const RewardsInformation = () => {
  return (
    <Page title="Rewards Information" icon={RewardsInformationIcon}>
      <RewardPool />
      <LivePlatformPools />
      <PlatformRewardsReceived />
      <DistributionHistory />
      {/* <PlatformDialog /> */}
    </Page>
  );
};

export default memo(RewardsInformation);
