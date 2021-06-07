import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { memo } from "react";
import moment from "moment";

import { adminLivePlatformPoolActions } from "./livePlatformPool.slice";
import LivePlatformPoolsCard from "./components/LivePlatformPoolsCard";
import AmountCell from "components/DataTable/components/AmountCell";
import ActionCell from "components/DataTable/components/ActionCell";
import ExpandCell from "components/DataTable/components/ExpandCell";
import LivePlatformPoolBar from "./components/LivePlatformPoolBar";
import ImageCell from "components/DataTable/components/ImageCell";
import DateCell from "components/DataTable/components/DateCell";
import { BitcoinColorIcon } from "components/Icons/Crypto";
import { EditIcon } from "components/Icons/Icons";
import useSmallScreen from "hooks/useSmallScreen";
import DataTable from "components/DataTable";
import TextToSvg from "components/TextToSvg";
import { formatPrice } from "lib/helpers";
import Section from "components/Section";
import useStyles from "./styles";

const LivePlatformPools = () => {
  const { data, cardsCount } = useSelector(
    (state) => state.adminLivePlatformPoolReducer
  );
  const isSmallScreen = useSmallScreen();
  const dispatch = useDispatch();
  const classes = useStyles();

  const toggleTableRow = (id) => () =>
    dispatch(adminLivePlatformPoolActions.toggleTableRow(id));

  const editPlatform = (platform) => () =>
    dispatch(adminLivePlatformPoolActions.togglePlatformDialog(platform));

  /**
   * Format table data
   */
  const mapData = (item) => ({
    0: { value: item.image },
    1: { value: moment(item.time).format("HH:mm") },
    2: {
      value: formatPrice(item.amount.value, "usd", "sp"),
      icon: () => <TextToSvg className="textSvg" text="USD" />,
    },
    3: { open: item.open, onClick: toggleTableRow(item.id) },
    4: { icon: EditIcon, onClick: editPlatform(item) },
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
    { label: "Platform" },
    { label: isSmallScreen ? "Dist. time" : "Distribution time" },
    { label: "Amount" },
    { label: "" },
    { label: "" },
  ];

  return (
    <Grid item xs={12} lg={6} className={classes.livePlatformPools}>
      <Section title="Live Platform Pool" header={<LivePlatformPoolBar />}>
        <DataTable
          tableHead={tableHead}
          mapData={mapData}
          data={data}
          cardComponent={LivePlatformPoolsCard}
          cardsCount={cardsCount}
          // loadMore={loadMoreData}
          loadMore={() => {}}
          components={[
            { component: ImageCell },
            { component: DateCell },
            {
              component: AmountCell,
              className: "black-text",
              props: { iconRight: true },
            },
            {
              component: ExpandCell,
            },
            {
              component: ActionCell,
            },
          ]}
        />
      </Section>
    </Grid>
  );
};

export default memo(LivePlatformPools);
