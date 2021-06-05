import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { memo } from "react";
import moment from "moment";

import { adminPlatformRewardsReceivedActions } from "./platformRewardsReceived.slice";
import PlatformRewardsReceivedCard from "./components/PlatformRewardsReceivedCard";
import AmountCell from "components/DataTable/components/AmountCell";
import ExpandCell from "components/DataTable/components/ExpandCell";
import StatusCell from "components/DataTable/components/StatusCell";
import ImageCell from "components/DataTable/components/ImageCell";
import DateCell from "components/DataTable/components/DateCell";
import { BitcoinColorIcon } from "components/Icons/Crypto";
import useSmallScreen from "hooks/useSmallScreen";
import DataTable from "components/DataTable";
import TextToSvg from "components/TextToSvg";
import { formatPrice } from "lib/helpers";
import Section from "components/Section";
import useStyles from "./styles";

const PlatformRewardsReceived = () => {
  const { data, cardsCount } = useSelector(
    (state) => state.adminPlatformRewardsReceivedReducer
  );
  const isSmallScreen = useSmallScreen();
  const dispatch = useDispatch();
  const classes = useStyles();

  const toggleTableRow = (id) => () =>
    dispatch(adminPlatformRewardsReceivedActions.toggleTableRow(id));

  /**
   * Format table data
   */
  const mapData = (item, index) => ({
    0: { value: moment(item.time).format("HH:mm") },
    1: { value: item.image },
    2: {
      value: formatPrice(item.amount.value, "usd", "sp"),
      icon: () => <TextToSvg className="textSvg" text="USD" />,
    },
    3: { value: item.status },
    4: { open: item.open, withText: !isSmallScreen, onClick: toggleTableRow(item.id) },
    expand: {
      open: item.open,
      ...item.prices
        .map(({ value, unit }, index) => ({
          [index + 1]: {
            component: AmountCell,
            props: { value, icon: BitcoinColorIcon, unit },
          },
        }))
        .reduce((p, n) => ({ ...p, ...n }), {}),
    },
  });

  /**
   * Load more data
   */
  // const loadMoreData = () => dispatch(RewardPoolActions.loadMore());

  const tableHead = [
    { label: "Distribution time" },
    { label: "Platform" },
    { label: "Amount" },
    { label: "" },
    { label: "" },
  ];

  return (
    <Grid item xs={12} className={classes.platformRewardReceived}>
      <Section title="Platform Rewards Received">
        <DataTable
          tableHead={tableHead}
          mapData={mapData}
          data={data}
          cardComponent={PlatformRewardsReceivedCard}
          cardsCount={cardsCount}
          // loadMore={loadMoreData}
          loadMore={() => {}}
          components={[
            { component: DateCell },
            { component: ImageCell },
            {
              component: AmountCell,
              className: "black-text",
              props: { iconRight: true },
            },
            { component: StatusCell },
            { component: ExpandCell },
          ]}
        />
      </Section>
    </Grid>
  );
};

export default memo(PlatformRewardsReceived);
